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