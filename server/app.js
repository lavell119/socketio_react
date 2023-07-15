const express = require('express')
const app =express()
const socket = require('socket.io')
const cors= require('cors')

//middleware
app.use(cors())
const server = app.listen(4200, ()=>{
    console.log('app listening on port 4200')
})


const io=socket(server)

io.on('connection', function(socket){
    console.log('made socket connection')
})