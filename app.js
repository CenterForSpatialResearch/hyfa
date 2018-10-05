let swarm = require('webrtc-swarm')

if (swarm.WEBRTC_SUPPORT) {
    console.log('webrtc is supported')
} else {
    console.log('webrtc not supported!')	// terminal
}


let net = require('net')

let server = net.createServer(function (socket) {
  socket.pipe(remoteFeed.replicate()).pipe(socket)
})

server.listen(5280)