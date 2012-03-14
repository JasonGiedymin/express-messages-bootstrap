# Express Messages
      
The _express-messages-bootstrap_ module provides flash notification rendering that is compatible with [Bootstrap](http://twitter.github.com/bootstrap/) CSS framework. This module is based on TJ Holowaychuk's express-messages. To use, simply assign it to a dynamic helper:

    app.dynamicHelpers({ messages: require('express-messages-bootstrap') });

## This Fork Code

This fork is seperately maintained but I do upstream sync with the original express-messages.

- The main github branch is considered stable.
- GA's should be Tagged.
- Major changes are milestoned.
- If you want bleeding edge changes look for the highest versioned beta branch or tag.

## Installation

Express-messages-bootstrap can also be [installed from the NPM repository](http://search.npmjs.org/#/express-messages-bootstrap).

    $ npm install express-messages-bootstrap

On cygwin you may need to force and display logging. Verbosity for some reason prevents hanging.

    $ npm --force --loglevel verbose express-messages-bootstrap.

## Usage

Then in a view you may output the notifications based on your templating engine:

### [EJS](https://github.com/visionmedia/ejs)

    <%- messages() %>

### [Jade](http://jade-lang.com/)

    != messages()

Which outputs HTML as shown below:

    <div id="messages">
        <div class="alert alert-error" data-alert="alert">
            <a class="close" href="#">×</a>
            <p>This is an error.</p>
        </div>
        <div class="alert alert-info" data-alert="alert">
            <a class="close" href="#">×</a>
            <p>This is an info.</p>
        </div>
        <div class="alert alert-warning" data-alert="alert">
            <a class="close" href="#">×</a>
            <p>This is a warning.</p>
        </div>
        <div class="alert alert-success" data-alert="alert">
            <a class="close" href="#">×</a>
            <p>This is success.</p>
        </div>
    </div>

## Running Tests

First make sure you have the submodules:

    $ git submodule update --init

Then run the tests:

    $ make test

## License 

Original express-messages License:

(The MIT License)

Copyright (c) 2011 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

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
