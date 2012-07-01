module.exports = (req, res) ->
    return () ->
        buf = []
        messages = req.flash()
        types = Object.keys(messages)
        len = types.length

        if !len
            return '<div id=\"messages\"></div>';

        buf.push('<div id="messages">')

        for i in [0...len]
            type = types[i]
            msgs = messages[type]

            if msgs?
                # Maintain " (double quotes) for attributes so that user can inject ' (single quotes)
                for j in [0...msgs.length]
                    msg = msgs[j]
                    buf.push("<div class=\"alert alert-#{type}\">")
                    buf.push("<button class=\"close\" data-dismiss=\"alert\">&times;</button>")
                    buf.push(msg)
                    buf.push("</div>")
        buf.push("</div>")

        return buf.join('\n')