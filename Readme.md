# Express Messages
      
The _express-messages-bootstrap_ module provides flash notification rendering that is compatible with [Bootstrap](http://twitter.github.com/bootstrap/) CSS framework. 

    // Raw messages, do with it what you like
    var messages = require('express-messages-bootstrap');

    // Old v2 rendering messages
    var messages = require('express-messages-bootstrap').with({should_render:true});

## Rewrite

Version 1.0 is a complete rewrite from previous versions (which were forked from express-messages).


## Installation

Express-messages-bootstrap can also be [installed from the NPM repository](http://search.npmjs.org/#/express-messages-bootstrap).

    $ npm install express-messages-bootstrap

On cygwin you may need to force and display logging. Verbosity for some reason prevents hanging.

    $ npm --force --loglevel verbose express-messages-bootstrap.


## Backward Compatible V2 Usage

By default only a raw list of messages in the order which you submit them are accessible. If you would
like them rendered as they used to be you'll have to use:

    .with({should_render:true})

Use rmessage() method (rendering message).


### [Jade](http://jade-lang.com/)

    if (messages_rendered)
      h3 Rendered
      // Rendered Messages `require('express-messages-bootstrap').with({should_render:true})`
      div!= rmessages()


## Normal usage

You can access the raw messages and with your template iterate on them.


### [Jade](http://jade-lang.com/)

    if (!messages_rendered)
      h3 Raw
      // Raw Messages `require('express-messages-bootstrap')`
      ul
        each message in messages
          li= message


## Output (Only for v2 Compatibility mode)

Note: You have full access to the messages list. If you want the old style of
having the middelware render content for you follow the v2 directions.

Which outputs HTML as shown below:

    <div id="messages">
        <div class="alert alert-error">
            <a class="close" data-dismiss="alert">&times;</a>
            This is an error.
        </div>
        <div class="alert alert-info">
            <a class="close" data-dismiss="alert">&times;</a>
            This is an info.
        </div>
        <div class="alert alert-warning">
            <a class="close" data-dismiss="alert">&times;</a>
            This is a warning.
        </div>
        <div class="alert alert-success">
            <a class="close" data-dismiss="alert">&times;</a>
            This is success.
        </div>
    </div>

## Running Tests

First make sure you have the submodules:

    $ git submodule update --init

Then run the tests:

    $ make test

## License 

(The MIT License)

Copyright (c) 2012 Jason Giedymin

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
