console.log('server is online')

// requiring express to its tools. 
const express = require('express'); 

// intializes the express object.  
const app = express();


// define a route to the server. 
app.get('/', (request, response) => {
  response.send('This is the lab server.');
});

// create a listener on a port for our computer, 
// this is needed to start the server. 
app.listen(4000, () => {
  console.log('I am listening on port 4000'); // this is listening for a request from our client or server
}); 



