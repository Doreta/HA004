'use strict';
const express =require('express');

// Constantsconst
PORT=8080;
constHOST='0.0.0.0';

// App
const app =express();
app.get('/', (req, res) => {res.send('Hello world\n');});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
