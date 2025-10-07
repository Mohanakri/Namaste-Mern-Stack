# Node.js Glossary - Complete Reference Guide

---

## **CORE CONCEPTS**

| Term | Definition | Example |
|------|------------|---------|
| **Node.js** | JavaScript runtime built on Chrome's V8 engine for server-side | // Run JavaScript outside browser<br>console.log('Hello from Node.js!');<br>// Execute: node app.js |
| **V8 Engine** | Google's JavaScript engine that compiles JS to machine code | // V8 compiles JS to native code<br>// Enables high performance execution |
| **Event Loop** | Mechanism handling async operations in single thread | console.log('1');<br>setTimeout(() => console.log('2'), 0);<br>console.log('3');<br>// Output: 1, 3, 2 |
| **Non-blocking I/O** | Asynchronous operations don't block execution | const fs = require('fs');<br><br>fs.readFile('file.txt', (err, data) => {<br>&nbsp;&nbsp;console.log(data);<br>});<br>console.log('This runs first!'); |
| **process** | Global object providing info about current Node process | console.log(process.version); // Node version<br>console.log(process.env.NODE_ENV); // Environment<br>console.log(process.argv); // CLI arguments<br>process.exit(0); // Exit with code |
| **Buffer** | Fixed-size chunk of memory for binary data | const buf = Buffer.from('Hello');<br>console.log(buf); // &lt;Buffer 48 65 6c 6c 6f&gt;<br>console.log(buf.toString()); // 'Hello'<br>const buf2 = Buffer.alloc(10); // 10 bytes |
| **Stream** | Abstract interface for working with streaming data | const fs = require('fs');<br>const readStream = fs.createReadStream('large.txt');<br><br>readStream.on('data', (chunk) => {<br>&nbsp;&nbsp;console.log('Received chunk:', chunk);<br>}); |
| **REPL** | Read-Eval-Print Loop for interactive JavaScript | // In terminal:<br>$ node<br>&gt; const x = 5<br>&gt; x + 10<br>15<br>&gt; .exit |

---

## **MODULE SYSTEM**

| Term | Definition | Example |
|------|------------|---------|
| **CommonJS** | Node's default module system (require/module.exports) | // math.js<br>function add(a, b) { return a + b; }<br>module.exports = { add };<br><br>// app.js<br>const { add } = require('./math');<br>console.log(add(5, 3)); // 8 |
| **require()** | Imports modules (built-in, npm packages, local files) | const fs = require('fs'); // built-in<br>const express = require('express'); // npm<br>const utils = require('./utils'); // local<br>const data = require('./data.json'); // JSON |
| **module.exports** | Exports values from module | // Single export<br>module.exports = function() { };<br><br>// Multiple exports<br>module.exports = {<br>&nbsp;&nbsp;func1,<br>&nbsp;&nbsp;func2,<br>&nbsp;&nbsp;constant: 42<br>}; |
| **exports** | Shorthand reference to module.exports | // Works<br>exports.add = (a, b) => a + b;<br><br>// Doesn't work (breaks reference)<br>exports = { add: (a, b) => a + b }; |
| **ES Modules** | Modern import/export syntax (requires .mjs or type: "module") | // package.json: { "type": "module" }<br><br>// math.js<br>export const add = (a, b) => a + b;<br><br>// app.js<br>import { add } from './math.js'; |
| **\_\_dirname** | Current directory path (CommonJS only) | console.log(__dirname);<br>// /Users/john/projects/myapp<br><br>const path = require('path');<br>const filePath = path.join(__dirname, 'data.json'); |
| **\_\_filename** | Current file path (CommonJS only) | console.log(__filename);<br>// /Users/john/projects/myapp/server.js |
| **import.meta** | Module metadata (ES Modules) | // ES Modules equivalent to __dirname<br>import { fileURLToPath } from 'url';<br>import { dirname } from 'path';<br><br>const __filename = fileURLToPath(import.meta.url);<br>const __dirname = dirname(__filename); |

---

## **FILE SYSTEM (fs)**

| Term | Definition | Example |
|------|------------|---------|
| **fs.readFile()** | Asynchronously reads entire file | const fs = require('fs');<br><br>fs.readFile('file.txt', 'utf8', (err, data) => {<br>&nbsp;&nbsp;if (err) throw err;<br>&nbsp;&nbsp;console.log(data);<br>}); |
| **fs.readFileSync()** | Synchronously reads file (blocks execution) | const fs = require('fs');<br><br>try {<br>&nbsp;&nbsp;const data = fs.readFileSync('file.txt', 'utf8');<br>&nbsp;&nbsp;console.log(data);<br>} catch (err) {<br>&nbsp;&nbsp;console.error(err);<br>} |
| **fs.writeFile()** | Writes data to file (overwrites existing) | fs.writeFile('output.txt', 'Hello Node!', (err) => {<br>&nbsp;&nbsp;if (err) throw err;<br>&nbsp;&nbsp;console.log('File saved!');<br>}); |
| **fs.appendFile()** | Appends data to file | fs.appendFile('log.txt', 'New log entry\n', (err) => {<br>&nbsp;&nbsp;if (err) throw err;<br>}); |
| **fs.unlink()** | Deletes file | fs.unlink('temp.txt', (err) => {<br>&nbsp;&nbsp;if (err) throw err;<br>&nbsp;&nbsp;console.log('File deleted');<br>}); |
| **fs.mkdir()** | Creates directory | fs.mkdir('new-folder', { recursive: true }, (err) => {<br>&nbsp;&nbsp;if (err) throw err;<br>}); |
| **fs.readdir()** | Reads directory contents | fs.readdir('./uploads', (err, files) => {<br>&nbsp;&nbsp;if (err) throw err;<br>&nbsp;&nbsp;console.log('Files:', files);<br>}); |
| **fs.stat()** | Gets file/directory info | fs.stat('file.txt', (err, stats) => {<br>&nbsp;&nbsp;console.log(stats.size); // bytes<br>&nbsp;&nbsp;console.log(stats.isFile()); // true<br>&nbsp;&nbsp;console.log(stats.isDirectory()); // false<br>}); |
| **fs.promises** | Promise-based file system API | const fs = require('fs').promises;<br><br>async function readFile() {<br>&nbsp;&nbsp;try {<br>&nbsp;&nbsp;&nbsp;&nbsp;const data = await fs.readFile('file.txt', 'utf8');<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(data);<br>&nbsp;&nbsp;} catch (err) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.error(err);<br>&nbsp;&nbsp;}<br>} |

---

## **PATH MODULE**

| Term | Definition | Example |
|------|------------|---------|
| **path.join()** | Joins path segments using platform-specific separator | const path = require('path');<br><br>const fullPath = path.join('/users', 'john', 'documents', 'file.txt');<br>// /users/john/documents/file.txt |
| **path.resolve()** | Resolves sequence of paths to absolute path | path.resolve('src', 'app.js');<br>// /Users/john/project/src/app.js<br><br>path.resolve('/foo', '/bar', 'file.txt');<br>// /bar/file.txt (absolute paths reset) |
| **path.basename()** | Returns last portion of path | path.basename('/users/john/file.txt');<br>// 'file.txt'<br><br>path.basename('/users/john/file.txt', '.txt');<br>// 'file' |
| **path.dirname()** | Returns directory name of path | path.dirname('/users/john/file.txt');<br>// '/users/john' |
| **path.extname()** | Returns file extension | path.extname('file.txt'); // '.txt'<br>path.extname('archive.tar.gz'); // '.gz'<br>path.extname('README'); // '' |
| **path.parse()** | Parses path into object | path.parse('/users/john/file.txt');<br>// {<br>//   root: '/',<br>//   dir: '/users/john',<br>//   base: 'file.txt',<br>//   ext: '.txt',<br>//   name: 'file'<br>// } |

---

## **HTTP MODULE**

| Term | Definition | Example |
|------|------------|---------|
| **http.createServer()** | Creates HTTP server | const http = require('http');<br><br>const server = http.createServer((req, res) => {<br>&nbsp;&nbsp;res.writeHead(200, { 'Content-Type': 'text/plain' });<br>&nbsp;&nbsp;res.end('Hello World!');<br>});<br><br>server.listen(3000); |
| **Request Object** | Incoming HTTP request data | server.on('request', (req, res) => {<br>&nbsp;&nbsp;console.log(req.method); // 'GET', 'POST', etc.<br>&nbsp;&nbsp;console.log(req.url); // '/api/users'<br>&nbsp;&nbsp;console.log(req.headers);<br>}); |
| **Response Object** | Outgoing HTTP response | res.statusCode = 200;<br>res.setHeader('Content-Type', 'application/json');<br>res.write('{"status": "ok"}');<br>res.end(); // or res.end('data') |
| **http.request()** | Makes HTTP request to external server | const options = {<br>&nbsp;&nbsp;hostname: 'api.example.com',<br>&nbsp;&nbsp;port: 443,<br>&nbsp;&nbsp;path: '/data',<br>&nbsp;&nbsp;method: 'GET'<br>};<br><br>const req = http.request(options, (res) => {<br>&nbsp;&nbsp;res.on('data', (chunk) => console.log(chunk));<br>});<br>req.end(); |
| **http.get()** | Shorthand for GET requests | http.get('http://api.example.com/data', (res) => {<br>&nbsp;&nbsp;let data = '';<br>&nbsp;&nbsp;res.on('data', (chunk) => data += chunk);<br>&nbsp;&nbsp;res.on('end', () => console.log(data));<br>}); |

---

## **STREAMS**

| Term | Definition | Example |
|------|------------|---------|
| **Readable Stream** | Source of data that can be read | const fs = require('fs');<br>const readStream = fs.createReadStream('large.txt');<br><br>readStream.on('data', (chunk) => {<br>&nbsp;&nbsp;console.log('Chunk:', chunk);<br>});<br><br>readStream.on('end', () => {<br>&nbsp;&nbsp;console.log('Reading complete');<br>}); |
| **Writable Stream** | Destination for data to be written | const writeStream = fs.createWriteStream('output.txt');<br><br>writeStream.write('Line 1\n');<br>writeStream.write('Line 2\n');<br>writeStream.end('Final line'); |
| **Duplex Stream** | Both readable and writable | const { Duplex } = require('stream');<br><br>const duplex = new Duplex({<br>&nbsp;&nbsp;read(size) { this.push('data'); },<br>&nbsp;&nbsp;write(chunk, encoding, callback) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(chunk.toString());<br>&nbsp;&nbsp;&nbsp;&nbsp;callback();<br>&nbsp;&nbsp;}<br>}); |
| **Transform Stream** | Modifies data as it's read/written | const { Transform } = require('stream');<br><br>const upperCase = new Transform({<br>&nbsp;&nbsp;transform(chunk, encoding, callback) {<br>&nbsp;&nbsp;&nbsp;&nbsp;this.push(chunk.toString().toUpperCase());<br>&nbsp;&nbsp;&nbsp;&nbsp;callback();<br>&nbsp;&nbsp;}<br>});<br><br>process.stdin.pipe(upperCase).pipe(process.stdout); |
| **pipe()** | Connects readable stream to writable stream | const fs = require('fs');<br><br>fs.createReadStream('input.txt')<br>&nbsp;&nbsp;.pipe(fs.createWriteStream('output.txt'));<br><br>// Chain multiple pipes<br>source.pipe(transform).pipe(destination); |
| **pipeline()** | Safer alternative to pipe with error handling | const { pipeline } = require('stream');<br>const fs = require('fs');<br><br>pipeline(<br>&nbsp;&nbsp;fs.createReadStream('input.txt'),<br>&nbsp;&nbsp;transform,<br>&nbsp;&nbsp;fs.createWriteStream('output.txt'),<br>&nbsp;&nbsp;(err) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (err) console.error('Pipeline failed', err);<br>&nbsp;&nbsp;}<br>); |

---

## **EVENTS**

| Term | Definition | Example |
|------|------------|---------|
| **EventEmitter** | Class for handling events | const EventEmitter = require('events');<br><br>class MyEmitter extends EventEmitter {}<br>const emitter = new MyEmitter();<br><br>emitter.on('event', () => {<br>&nbsp;&nbsp;console.log('Event fired!');<br>});<br><br>emitter.emit('event'); |
| **on()** | Registers event listener | emitter.on('data', (data) => {<br>&nbsp;&nbsp;console.log('Received:', data);<br>});<br><br>emitter.emit('data', { id: 1, name: 'John' }); |
| **once()** | Registers one-time event listener | emitter.once('connect', () => {<br>&nbsp;&nbsp;console.log('Connected once!');<br>});<br><br>emitter.emit('connect'); // fires<br>emitter.emit('connect'); // doesn't fire |
| **emit()** | Triggers event with optional arguments | emitter.emit('error', new Error('Something failed'));<br>emitter.emit('data', 'hello', 123, true); |
| **removeListener()** | Removes specific event listener | function handler() { console.log('Hello'); }<br><br>emitter.on('event', handler);<br>emitter.removeListener('event', handler); |
| **removeAllListeners()** | Removes all listeners for event | emitter.removeAllListeners('data');<br>emitter.removeAllListeners(); // all events |

---

## **CHILD PROCESSES**

| Term | Definition | Example |
|------|------------|---------|
| **child_process.exec()** | Executes shell command with callback | const { exec } = require('child_process');<br><br>exec('ls -la', (error, stdout, stderr) => {<br>&nbsp;&nbsp;if (error) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.error('Error:', error);<br>&nbsp;&nbsp;&nbsp;&nbsp;return;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;console.log(stdout);<br>}); |
| **child_process.spawn()** | Spawns process with streaming I/O | const { spawn } = require('child_process');<br><br>const ls = spawn('ls', ['-la']);<br><br>ls.stdout.on('data', (data) => {<br>&nbsp;&nbsp;console.log(`Output: ${data}`);<br>});<br><br>ls.on('close', (code) => {<br>&nbsp;&nbsp;console.log(`Exited with code ${code}`);<br>}); |
| **child_process.fork()** | Spawns new Node.js process | const { fork } = require('child_process');<br><br>const child = fork('worker.js');<br><br>child.on('message', (msg) => {<br>&nbsp;&nbsp;console.log('Message from child:', msg);<br>});<br><br>child.send({ task: 'process data' }); |
| **child_process.execFile()** | Executes file directly (no shell) | const { execFile } = require('child_process');<br><br>execFile('node', ['--version'], (error, stdout) => {<br>&nbsp;&nbsp;console.log(stdout);<br>}); |

---

## **CRYPTO MODULE**

| Term | Definition | Example |
|------|------------|---------|
| **crypto.createHash()** | Creates hash (MD5, SHA256, etc.) | const crypto = require('crypto');<br><br>const hash = crypto.createHash('sha256');<br>hash.update('Hello World');<br>console.log(hash.digest('hex'));<br>// a591a6d40bf420404a011733cfb7b190... |
| **crypto.randomBytes()** | Generates cryptographically strong random bytes | crypto.randomBytes(16, (err, buf) => {<br>&nbsp;&nbsp;if (err) throw err;<br>&nbsp;&nbsp;console.log(buf.toString('hex'));<br>&nbsp;&nbsp;// 8f3a2b1c5d7e9f0a... (32 hex chars)<br>}); |
| **crypto.pbkdf2()** | Password-based key derivation | crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512',<br>&nbsp;&nbsp;(err, derivedKey) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (err) throw err;<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(derivedKey.toString('hex'));<br>&nbsp;&nbsp;}<br>); |
| **crypto.createCipheriv()** | Creates cipher for encryption | const algorithm = 'aes-256-cbc';<br>const key = crypto.randomBytes(32);<br>const iv = crypto.randomBytes(16);<br><br>const cipher = crypto.createCipheriv(algorithm, key, iv);<br>let encrypted = cipher.update('secret', 'utf8', 'hex');<br>encrypted += cipher.final('hex'); |

---

## **OS MODULE**

| Term | Definition | Example |
|------|------------|---------|
| **os.platform()** | Returns operating system platform | const os = require('os');<br><br>console.log(os.platform());<br>// 'darwin', 'win32', 'linux', etc. |
| **os.cpus()** | Returns CPU information | console.log(os.cpus().length); // core count<br>console.log(os.cpus()[0].model); // CPU model |
| **os.totalmem()** | Returns total system memory | console.log(os.totalmem()); // bytes<br>console.log(`${os.totalmem() / 1024 / 1024 / 1024} GB`); |
| **os.freemem()** | Returns free system memory | console.log(os.freemem()); |
| **os.hostname()** | Returns system hostname | console.log(os.hostname()); // 'johns-macbook.local' |
| **os.userInfo()** | Returns current user info | console.log(os.userInfo());<br>// { username: 'john', homedir: '/Users/john', ... } |

---

## **NPM (PACKAGE MANAGER)**

| Term | Definition | Example |
|------|------------|---------|
| **package.json** | Project metadata and dependencies | {<br>&nbsp;&nbsp;"name": "my-app",<br>&nbsp;&nbsp;"version": "1.0.0",<br>&nbsp;&nbsp;"dependencies": {<br>&nbsp;&nbsp;&nbsp;&nbsp;"express": "^4.18.0"<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;"scripts": {<br>&nbsp;&nbsp;&nbsp;&nbsp;"start": "node server.js"<br>&nbsp;&nbsp;}<br>} |
| **npm install** | Installs dependencies | npm install express<br>npm install lodash --save<br>npm install jest --save-dev<br>npm install -g nodemon |
| **npm init** | Creates new package.json | npm init<br>npm init -y // skip questions |
| **npm run** | Executes npm script | // package.json scripts:<br>// "dev": "nodemon app.js"<br><br>npm run dev |
| **npm update** | Updates packages | npm update<br>npm update express |
| **npm uninstall** | Removes package | npm uninstall express<br>npm uninstall -g nodemon |
| **package-lock.json** | Locks exact dependency versions | // Auto-generated<br>// Ensures consistent installs across environments |
| **node_modules** | Directory containing installed packages | // Auto-generated<br>// Add to .gitignore |
| **Semantic Versioning** | Version format: MAJOR.MINOR.PATCH | "express": "^4.18.2"<br>// ^ allows minor/patch updates<br>"lodash": "~4.17.21"<br>// ~ allows patch updates only<br>"react": "18.2.0" // exact version |

---

## **EXPRESS.JS (POPULAR FRAMEWORK)**

| Term | Definition | Example |
|------|------------|---------|
| **express()** | Creates Express application | const express = require('express');<br>const app = express();<br><br>app.listen(3000, () => {<br>&nbsp;&nbsp;console.log('Server running on port 3000');<br>}); |
| **Routing** | Defines endpoints for different HTTP methods | app.get('/', (req, res) => {<br>&nbsp;&nbsp;res.send('Hello World!');<br>});<br><br>app.post('/api/users', (req, res) => {<br>&nbsp;&nbsp;res.json({ message: 'User created' });<br>}); |
| **Middleware** | Functions that execute before route handlers | app.use(express.json()); // parse JSON<br><br>app.use((req, res, next) => {<br>&nbsp;&nbsp;console.log(`${req.method} ${req.url}`);<br>&nbsp;&nbsp;next(); // pass to next middleware<br>}); |
| **Route Parameters** | Dynamic URL segments | app.get('/users/:id', (req, res) => {<br>&nbsp;&nbsp;const userId = req.params.id;<br>&nbsp;&nbsp;res.send(`User ID: ${userId}`);<br>});<br><br>// /users/123 → User ID: 123 |
| **Query Parameters** | URL query strings | app.get('/search', (req, res) => {<br>&nbsp;&nbsp;const { q, page } = req.query;<br>&nbsp;&nbsp;res.send(`Search: ${q}, Page: ${page}`);<br>});<br><br>// /search?q=nodejs&page=2 |
| **app.use()** | Mounts middleware | app.use(express.json());<br>app.use('/api', apiRouter);<br>app.use(express.static('public')); |
| **express.Router()** | Creates modular route handlers | const router = express.Router();<br><br>router.get('/users', (req, res) => { });<br>router.post('/users', (req, res) => { });<br><br>app.use('/api', router); |

---

## **ASYNC PATTERNS**

| Term | Definition | Example |
|------|------------|---------|
| **Callback Pattern** | Traditional Node.js async pattern | fs.readFile('file.txt', 'utf8', (err, data) => {<br>&nbsp;&nbsp;if (err) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.error('Error:', err);<br>&nbsp;&nbsp;&nbsp;&nbsp;return;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;console.log(data);<br>}); |
| **Promises** | Modern alternative to callbacks | const fs = require('fs').promises;<br><br>fs.readFile('file.txt', 'utf8')<br>&nbsp;&nbsp;.then(data => console.log(data))<br>&nbsp;&nbsp;.catch(err => console.error(err)); |
| **async/await** | Syntactic sugar for promises | async function readFile() {<br>&nbsp;&nbsp;try {<br>&nbsp;&nbsp;&nbsp;&nbsp;const data = await fs.readFile('file.txt', 'utf8');<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(data);<br>&nbsp;&nbsp;} catch (err) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.error(err);<br>&nbsp;&nbsp;}<br>}<br><br>readFile(); |
| **util.promisify()** | Converts callback-based functions to promises | const util = require('util');<br>const fs = require('fs');<br><br>const readFile = util.promisify(fs.readFile);<br><br>async function read() {<br>&nbsp;&nbsp;const data = await readFile('file.txt', 'utf8');<br>&nbsp;&nbsp;console.log(data);<br>} |

---

## **ERROR HANDLING**

| Term | Definition | Example |
|------|------------|---------|
| **try/catch** | Synchronous error handling | try {<br>&nbsp;&nbsp;const data = JSON.parse(invalidJSON);<br>} catch (error) {<br>&nbsp;&nbsp;console.error('Parse error:', error.message);<br>} |
| **Error-first Callbacks** | Node.js callback convention | fs.readFile('file.txt', (err, data) => {<br>&nbsp;&nbsp;if (err) {<br>&nbsp;&nbsp;&nbsp;&nbsp;// Handle error<br>&nbsp;&nbsp;&nbsp;&nbsp;console.error(err);<br>&nbsp;&nbsp;&nbsp;&nbsp;return;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;// Process data<br>&nbsp;&nbsp;console.log(data);<br>}); |
| **process.on('uncaughtException')** | Catches unhandled exceptions | process.on('uncaughtException', (err) => {<br>&nbsp;&nbsp;console.error('Uncaught Exception:', err);<br>&nbsp;&nbsp;process.exit(1); // Exit after logging<br>}); |
| **process.on('unhandledRejection')** | Catches unhandled promise rejections | process.on('unhandledRejection', (reason, promise) => {<br>&nbsp;&nbsp;console.error('Unhandled Rejection:', reason);<br>&nbsp;&nbsp;process.exit(1);<br>}); |

---

## **ENVIRONMENT & CONFIG**

| Term | Definition | Example |
|------|------------|---------|
| **process.env** | Environment variables | console.log(process.env.NODE_ENV); // 'development'<br>console.log(process.env.PORT); // '3000'<br>console.log(process.env.DATABASE_URL); |
| **.env File** | Store environment variables (use dotenv package) | // .env file<br>PORT=3000<br>DATABASE_URL=mongodb://localhost<br>API_KEY=secret123<br><br>// app.js<br>require('dotenv').config();<br>console.log(process.env.PORT); |
| **config Files** | Centralized configuration | // config.js<br>module.exports = {<br>&nbsp;&nbsp;port: process.env.PORT || 3000,<br>&nbsp;&nbsp;db: process.env.DATABASE_URL,<br>&nbsp;&nbsp;env: process.env.NODE_ENV || 'development'<br>};<br><br>const config = require('./config'); |

---

## **DEBUGGING & LOGGING**

| Term | Definition | Example |
|------|------------|---------|
| **console.log()** | Basic logging | console.log('Server started');<br>console.log('User:', { id: 1, name: 'John' }); |
| **console.error()** | Error logging | console.error('Failed to connect:', error); |
| **console.time()** | Measures execution time | console.time('operation');<br>// ... some code ...<br>console.timeEnd('operation');<br>// operation: 123.456ms |
| **debugger** | Built-in debugging breakpoint | function calculate(x, y) {<br>&nbsp;&nbsp;debugger; // pauses execution<br>&nbsp;&nbsp;return x + y;<br>}<br><br>// Run: node inspect app.js |
| **--inspect Flag** | Chrome DevTools debugging | // Run in terminal:<br>node --inspect app.js<br>// Open chrome://inspect in Chrome |

---

## **PERFORMANCE & CLUSTERING**

| Term | Definition | Example |
|------|------------|---------|
| **cluster Module** | Creates child processes for multi-core usage | const cluster = require('cluster');<br>const os = require('os');<br><br>if (cluster.isMaster) {<br>&nbsp;&nbsp;const cpuCount = os.cpus().length;<br>&nbsp;&nbsp;for (let i = 0; i < cpuCount; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;cluster.fork();<br>&nbsp;&nbsp;}<br>} else {<br>&nbsp;&nbsp;// Worker process<br>&nbsp;&nbsp;require('./server');<br>} |
| **Worker Threads** | True multi-threading in Node.js | const { Worker } = require('worker_threads');<br><br>const worker = new Worker('./worker.js');<br><br>worker.on('message', (msg) => {<br>&nbsp;&nbsp;console.log('From worker:', msg);<br>});<br><br>worker.postMessage('Start task'); |
| **Performance Hooks** | Measuring performance | const { performance } = require('perf_hooks');<br><br>const start = performance.now();<br>// ... operations ...<br>const end = performance.now();<br>console.log(`Took ${end - start}ms`); |

---

## **TESTING**

| Term | Definition | Example |
|------|------------|---------|
| **Jest** | Popular testing framework | // sum.test.js<br>const sum = require('./sum');<br><br>test('adds 1 + 2 to equal 3', () => {<br>&nbsp;&nbsp;expect(sum(1, 2)).toBe(3);<br>}); |
| **Mocha** | Flexible testing framework | const assert = require('assert');<br><br>describe('Array', () => {<br>&nbsp;&nbsp;describe('#indexOf()', () => {<br>&nbsp;&nbsp;&nbsp;&nbsp;it('should return -1 when not present', () => {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;assert.equal([1,2,3].indexOf(4), -1);<br>&nbsp;&nbsp;&nbsp;&nbsp;});<br>&nbsp;&nbsp;});<br>}); |
| **Supertest** | HTTP assertion library | const request = require('supertest');<br>const app = require('./app');<br><br>test('GET /', async () => {<br>&nbsp;&nbsp;const response = await request(app).get('/');<br>&nbsp;&nbsp;expect(response.statusCode).toBe(200);<br>}); |
| **assert Module** | Built-in assertion library | const assert = require('assert');<br><br>assert.strictEqual(1 + 1, 2);<br>assert.deepStrictEqual({ a: 1 }, { a: 1 });<br>assert.throws(() => { throw new Error('fail'); });
