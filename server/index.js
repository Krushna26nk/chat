const express =  require('express');
const socketio = require('socket.io');

const {addUser,getUser,getUsersInRoom,removeUser} = require('./users');

const http = require('http');

const port = process.env.PORT || 5000;

const router = require('./routes/router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection',(socket)=>{

    socket.on('join',({name, room}, callback) => {
        // console.log('aaaaa',name,room);
        const { error , user} = addUser({ id: socket.id, name, room});

        if(error) return callback(error);

        socket.emit('message',{
            user:'admin',
            text:`${user.name} welcome to the room ${user.room}`
        })
        socket.broadcast.to(user.room).emit('message',{
            user:'admin',
            text:`${user.name} has joined.`
        })

        socket.join(user.room);
        callback();
    });

    socket.on('sendMessage',(message,callback)=>{
        const user = getUser(socket.id);
        console.log('ssd',user);
        io.to(user.room).emit('message',{
            user:user.name,
            text:message
        });
        callback();
    })

    socket.on('disconnect',()=>{
        console.log('user left ..');
    })
})

app.use(router);

server.listen(port,()=>{
    console.log(`server has started ${port}`);
})