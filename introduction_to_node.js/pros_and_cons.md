> Node.js is built to solve high I/O. Previous slides shows us bottlenecks in a web application and Node.js fit for a solution.

***

Pros
----

- Built on top of Google's V8
- Small memory footprint per request
- Asynchronous non-blocking operation

***

> Google's V8 javascript engine give Node a huge boost in performance by compiling javascript code directly to machine code. V8 keeps up to date with the ECMAScript standard.

> [Code] A PHP mysql request (Blocking code)

> This code does some I/O, and the process is blocked from continuing until all the data has come back. Subsequent requests are processed by spawning a new thread which incurs memory. Managing threads within an application is complex. Also, when a large number of threads is needed to handle many concurrent server connections, threading can tax operating systems memory.

***

Cons
----

- Computational heavy applications
- Shift in programming paradigm

***

> Because of Node.js single process nature, heavy computations would slow down the application. A solution would be to delegate tasks by spawing a different thread to handle the computation. But then again, this would incur another memory and we're back to same problem introduced in other languages like PHP.

> Many developers coming into Node from PHP and Ruby will feel awkward with the asynchronous style of programming. Often times, beginners in Node believes that the only way to code in Node is through callbacks and likely to create a "callback hell or pyramid of doom" code.

> [Image/Code] Callback hell

> In the coming topics, I'm going to show you how to solve this issue using Node async module and Promises.