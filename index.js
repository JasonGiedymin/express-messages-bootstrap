module.exports = function(req, res) {
  return function() {
    var buf, i, j, len, messages, msg, msgs, type, types, _ref;
    buf = [];
    messages = req.flash();
    types = Object.keys(messages);
    len = types.length;
    if (!len) {
      return '';
    }
    buf.push('<div id="messages">');
    for (i = 0; (0 <= len ? i < len : i > len); (0 <= len ? i += 1 : i -= 1)) {
      type = types[i];
      msgs = messages[type];
      if (msgs != null) {
        buf.push("<div class=\"alert-message " + type + "\" data-alert=\"alert\">");
        buf.push("<a class=\"close\" href=\"#\">×</a>");
        for (j = 0, _ref = msgs.length; (0 <= _ref ? j < _ref : j > _ref); (0 <= _ref ? j += 1 : j -= 1)) {
          msg = msgs[j];
          buf.push("<p>" + msg + "</p>");
        }
        buf.push("</div>");
      }
    }
    buf.push("</div>");
    return buf.join('\n');
  };
};