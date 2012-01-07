module.exports = (req, res) ->
    return () ->
        buf = []
        messages = req.flash()
        types = Object.keys(messages)
        len = types.length

        if !len
            return ''

        buf.push('<div id="messages">')

        for i in [0...len]
            type = types[i]
            msgs = messages[type]

            if msgs?
                # Maintain " (double quotes) for attributes so that user can inject ' (single quotes)
                buf.push("<div class=\"alert-message #{type}\" data-alert=\"alert\">")
                buf.push("<a class=\"close\" href=\"#\">×</a>")
                for j in [0...msgs.length]
                    msg = msgs[j]
                    buf.push("<p>#{msg}</p>")
                buf.push("</div>")
        buf.push("</div>")

        return buf.join('\n')