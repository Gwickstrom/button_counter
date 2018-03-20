//Where the logic of the server file/sockets goes
module.exports = function Route(app, server){
    var io = require('socket.io').listen(server)
    //note counter declaration locaation in the index.js routes file.
    var counter = 0;
    io.sockets.on('connection', function(socket){
        socket.on('push_button', function(data){
            counter +=1;
            //emit to everyone in the index.js file.
            io.emit('push_counter', {response: counter});
        })

        //resetting the counter to 0
        socket.on('reset_counter', function (data){
             counter = 0;
             io.emit('reset', {response: counter});
        })
    })
    //root route to render ejs view
    app.get('/', function(req, res){
        res.render('index');
    })
}
