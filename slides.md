# NodeJS like a boss

---

## Our Presenters

## David Luecke

* GitHub: [daffl.github.com](http://daffl.github.com), Twitter: [@daffl](http://twitter.com/daffl)

## Eric Kryski

* GitHub: [ekryski.github.com](http://ekryski.github.com), Twitter: [@ekryski](http://twitter.com/ekryski)

---

## Our Sponsors

## Assembly Co-working Space

![Assembly](images/sponsors/assembly_logo.png)

## PetroFeed

![PetroFeed](images/sponsors/pf-logo.png)

---

## Our Sponsors

## Village Brewery

![Village Brewery](images/sponsors/village_brewery_logo_inverted.png)

---

## Last Month

* Something awesome
* More awesomeness

---

## NodeJS

[Node.js](http://nodejs.org/) is a platform built on Chrome's V8 JavaScript runtime for easily building fast, scalable network applications.

![NodeJS logo](images/nodejs.png)

* HTTP/HTTPS
* TCP/UDP Sockets
* Event Emitters
* Streams
* Files System Access
* Cross Platform

---

## Modules

### The [__N__ode __P__ackage __M__anager](https://npmjs.org)

- currently hosts ~ 28000 modules
- easy to use (`npm install <package>`)
- easy to publish (`npm publish`)
- use it with anything (folders, tarballs, git repositories)

### [CommonJS](http://www.commonjs.org/)

- Attempt for JavaScript API standardization

---

## CommonJS modules

Provides global `module`, `exports` and `require()` to define this files API

	!javascript
	// module1.js
	exports.hello = 'World';
	// or
	module.exports = {
		hello: 'World'
	}

Using the module

	!javascript
	// main.js
	var mod1 = require('./module1');

	console.log(mod1.hello); // -> World

---

## package.json

CommonJS specification for describing JavaScript packages

    !javascript
    {
      "name": "node-up",
      "version": "0.1.0",
      "author": "YYCJS <people@yycjs.com>",
      "description": "Server side JavaScript FTW!",
      "scripts": {
        "test": "mocha test",
        "start": "node lib/main.js"
      },
      "main": "./lib/main.js",
      "repository": {
        "type": "git",
        "url": "https://github.com/yycjs/node-up"
      },
      "dependencies": {
        "somePackage": "> 1.0.0"
      },
      "devDependencies": {
        "some-dev-only-package":  "*"
      },
      "license": "MIT"
    }

---

## Web Development

<br>
Create `example.js` like this:

	!javascript
	var http = require('http');
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('Hello World\n');
	}).listen(1337, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:1337/');

And run it like:

	% node example.js
	Server running at http://127.0.0.1:1337/

---

## Serving an HTML File

<br>

	!javascript
	var http = require('http');
	var fs = require('fs');

	http.createServer(function (req, res) {
		fs.readFile('index.html', function(error, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
	  		res.end(data);
		});
	}).listen(1337, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:1337/');

---

## Next Month

* Something awesome
* More awesomeness
