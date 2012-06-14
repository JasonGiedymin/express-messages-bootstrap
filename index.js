module.exports = function(req, res) {
  return function() {
    var buf, i, j, len, messages, msg, msgs, type, types, _ref;
    buf = [];
    messages = req.flash();
    types = Object.keys(messages);
    len = types.length;
    if (!len) return '';
    buf.push('<div id="messages">');
    for (i = 0; 0 <= len ? i < len : i > len; 0 <= len ? i++ : i--) {
      type = types[i];
      msgs = messages[type];
      if (msgs != null) {
        for (j = 0, _ref = msgs.length; 0 <= _ref ? j < _ref : j > _ref; 0 <= _ref ? j++ : j--) {
          msg = msgs[j];
          buf.push("<div class=\"alert alert-" + type + "\">");
          buf.push("<a class=\"close\" data-dismiss=\"alert\">&times;</a>");
          buf.push(msg);
          buf.push("</div>");
        }
      }
    }
    buf.push("</div>");
    return buf.join('\n');
  };
};
