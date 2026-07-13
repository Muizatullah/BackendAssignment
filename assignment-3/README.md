# Assignment

## Theory

1. What are Node.js Core Modules?
2. Explain the purpose of each of the following modules:

* `fs`
* `path`
* `http`
* `os`
* `events`
* `crypto`
* `url`
3. Explain why the `path` module is important for cross-platform applications.
4. Describe three real-world uses of the `crypto` module.
5. Explain how the `http` module processes a browser request.



### Answer 
1. Node.js Core Modules are built-in Javascript libraries that come bundled with Node.js, You can use them immediately without installing anything from npm

2. fs module = allows Node.js to interact with files and folder
- path module = Helps developer work with file and folder path across different operating system
- HTTP modules = Allows Node.js to create web servers
- os modules = Provides information about the computer operating system
- Events modules = Allows one parts of an application to notify another part whwn something happen
- Crypto Modules = provides cryptographic functionality, it's used for password hashing, encryption,tokens,random values,digital signature. 
- URL module = It helps parse and manipulate URLs 


3. Why the path module is important for cross platform is because path.join () authomatically uses the right seperator while path.resolve()creates absolutely paths correctly:These function prevents error when someone runs your code on a different operating system 


4. Pasword hashing: Uses crypto.scryptsync() or pbkdf2sync to hash passwords before storing them in a database,preventing plaintext exposure if breaches
- Token generation: crypto.randomBytes() to creates,unpridictable rrandom tokens for sessions IDs,password reset links, or API key
- Digital signature: uses crypto.creatingSigns()and crypto.createverify() to sign data(e.g JWT tokens,sogtware packages)and verify authenticity and integrity



5. When a browser sends a request to an HTTP server built with Node.js http modules: 
.Server listens on a port(e.g 2026) using http.createserver()
. Request arrives- the modules parses the raw Tcp data into a req object containing:
-Method(Get,PosT)
URL path(/ , /about etc)
-callback fires -your code runs with (req,res) objects
-your inspect req -decide what to do bases on method + URL path
=You write to res - set header,status code,and send response body
-res.end() signals the response is complete,Node sends it back as araw HTTP over TCP