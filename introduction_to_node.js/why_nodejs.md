
> Introduction

***

Web used to be about consumption
----

- Viewing web pages
- Watching videos
- Looking for pictures of animals (cats)
- Downloading files

***

> The web used to be about consumption. Viewing web pages, watching videos, looking at pictures of cats... but the web has become more about interaction. Users around the world want to interact with each other, and they want to do it in real time.

***

Web has become more about interaction
----

- Chat
- Gaming
- Social media
- Online collaboration

***

> Each of these features requires real time communication between users, clients, and servers across the web at a massive scale. Often I/O is a bottleneck of application , it might be network io, file io or database io. So what do software engineers need to make this happen? We need real-time communication between clients and servers - which means we need fast, persistent I/O.

***

Enter Node.js
----

- Non-blocking (Async) I/O
- Event-driven
- Javascript

***

> [Image] Nginx vs Apache benchmark.

> To scale large volumes of clients, all I/O intensive operations in Node are performed asynchronously

> [Image] Asynchronous operation vs Synchronous operation

> When a Node application needs to perform a blocking operation (I/O operations, heavy computation, etc) it sends an asynchronous task to the event loop, along with a callback function and then continue to executr the rest of its program.