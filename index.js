(function() {
/*
 * Note: needs real profile numbers.
 *
 * should_render:boolean - true if messages will be rendered,
 *                         false otherwise, in which case data is returned
 *                         This can also be seen as a compatability mode,
 *                         though you will need to call the lib differently.
 * purge_session:boolean - true if middleware should purge the session
 *                         false otherwise.
 * with_string:string    - string to use when joining during rendering
 *
 * perf: { 1:http://jsperf.com/object-vs-array-vs-native-linked-list/3
 *        ,2:http://jsperf.com/array-prototype-push-apply-vs-concat/5
 *        ,3:http://jsperf.com/while-testing
 *        ,4:http://jsperf.com/whiletestingmore
 *        ,5:http://jsperf.com/ultimate-string-concatenation-tests/13 }
 */
var index = function(should_render, purge_session, with_string) {
  if (should_render == null)
    should_render = false;
  if (purge_session == null)
    purge_session = true;
  if (with_string == null)
    with_string = '\n';

  return function(req, res, next) {
    if (null == req.session)
      throw Error("Session support disabled, please enable to use express-messages-bootstrap.");

    res.locals.messages_rendered = should_render;
    res.locals.messages = [];

    function updateLocals() {
      // Merge existing upstream session messages
      // *perf.2: prototype push is blazing fast, unshift is not
      Array.prototype.push.apply(res.locals.messages, req.session.messages);

      // Purge session if user says to
      if (purge_session == true)
        delete req.session.messages; // *perf.1: obj del fast
    }

    // Add message to session. Update locals. 
    function createAlert(category, alert_message) {
      var ret_val;

      // Don't blow away session just yet, set it if not around.
      if (null == req.session.messages)
        req.session.messages = [];

      if(should_render){
        // *perf.3,4: reverse while loops are faster, unshift alone is ~ to push
        ret_val = req.session.messages.unshift([category, alert_message]);
      }
      else {
        // *perf.1: array faster
        ret_val = req.session.messages.push([category, alert_message]);
        updateLocals(); // notice we don't do this when rendering
      }

      return ret_val;
    }

    // allows custom
    req.alert = function(category, alert_message) {
      return createAlert(category, alert_message);
    }

    // Helper - Info
    req.info = function(alert_message) {
      return req.alert('info', alert_message);
    }

    // Helper - Success
    req.success = function(alert_message) {
      return req.alert('success', alert_message);
    }

    // Helper - Error
    req.error = function(alert_message) {
      return req.alert('error', alert_message);
    }

    // Helper method for v2 compatability
    function renderMessages(messages) {
      updateLocals(); // Now we call updateLocals

      var divStart = '<div id="messages">';
      var divEnd = '</div>';
      var len = messages.length;
      var rendered = '';

      if (!len) 
        return divStart + divEnd;

      rendered+=(divStart);
      
      while (len) {
        index = --len; // *perf.3,4: reverse faster
        var category = messages[index][0]; // *perf.1: array faster
        var alert_message = messages[index][1];
        rendered+=('<div class="alert alert-' + category + '">'); // *perf.5: += reasonably fast
        rendered+=('<button class="close" data-dismiss="alert">&times;</button>');
        rendered+=(alert_message);
        rendered+=('</div>');
      }
      
      rendered+=(divEnd);
      return rendered;
    }

    if(should_render) // Supply convenience method for user
      res.locals.rmessages = renderMessages.bind(this, res.locals.messages);
    
    next();
  }
}

module.exports = index();
module.exports.with = function(options) {
  options = options || {};
  return index(options.should_render, options.purge_session, options.with_string);
}

}).call(this);
