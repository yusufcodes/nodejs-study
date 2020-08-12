# The Complete Node.js Developer Course (3rd Edition)

## Introduction

This repo will contain the study notes and code I write for The [Complete Node.js Developer Course (3rd Edition)](https://www.udemy.com/course/the-complete-nodejs-developer-course-2).

**Course Started:** 11/8/20

## Section 2: Installing and Exploring Node.js

### What is Node.js?

Allows JavaScript to be used on the server-side, being able to build things like web servers.

**Node.js is a JavaScript runtime built on Chrome's V8 JavaScript Engine**

JavaScript Engine: Compiles JS down to Machine Code, which a machine can execute. It is written in C==.

Node.js is not a language, it is a **runtime** - something that provides custom functionality.

For any Node.js method, it maps to a C++ function, which is ran by the V8 JavaScript Engine, and the result is passed back to Node.

### Why should I use Node.js?

**Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.**

When Node interacts with your machine or a server, this is an I/O operation, which is non-blocking: while the Node app is waiting for a response, it can do other things. This gives a faster server-side development experience.

### First Node.js Script

We can write any Node.js code in a file and run it using the **node** command:

```
> node hello.js
```

## Section 3: Node.js Module System (Notes App)

This section will go over the **File System** module, allowing for us to read/write to files on the operating system.

## Importing Node.js Core Modules

We will be using the **writeFileSync** method to start with, which is an asynchronous method (async version is available).

The **require** function is how we load things into Node, so we need to do this for the File System Module:

```js
const fs = require("fs");
```

## Importing Own Files

Similar to importing modules, you use the require function to import any other JS files. This will immediately execute the code in this file before anything else:

```js
// app.js
const name = require('./utils.js);
```

Now, to access anything such as a variable within this imported file, the variable must be **exported**, by assigning it to **module.exports:**

```js
// utils.js
// Exporting a defined variable, called name
module.exports = name;
```
