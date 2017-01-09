// `http` is a standard library
// built into node.
var http = require('http');

// Create a new server instance.
var server = new http.Server();

// Start the server on port 8080.
server.listen(8080, function () {
  console.log('Server listening on http://localhost:8080/gun')
})

// Our GUN setup from the last example.
var Gun = require('gun');
var gun = Gun();

// This time, we call `.wsp`.
gun.wsp(server);


// Read `greetings`, saving it to a variable.
var greetings = gun.get('greetings');

// Update the value on `greetings`.
greetings.put({
    hello: 'world',
})

// Print the value!
greetings.on(function (update) {
    console.log('Update:', update)
})
