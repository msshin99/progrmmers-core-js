// console.log("안녕 자바스크립트");




const server = require('live-server');

const params = {

    host:'localhost',
    port:3000,
    open:false,
    root:'./client'
}

server.start(params)
