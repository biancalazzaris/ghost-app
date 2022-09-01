const { log } = require('console');
const express = require('express');
const app = express();

//servidor do node, em vez do express
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.get('/', (eq, res) => {
    res.render('index');
});

io.on('connection', (socket) => {
    socket.on('iniciaChat', (data) => {
        console.log('SERVER', data);
        socket.emit('showMessage', data);
    });
});



http.listen(5000, () => {
    console.log('servidor rodando: http://localhost:5000');
});
