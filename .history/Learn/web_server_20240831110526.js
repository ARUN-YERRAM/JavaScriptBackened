// const http = require('http');
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    if (res.url()) {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end("hello Arun!");
    }
})
server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
})