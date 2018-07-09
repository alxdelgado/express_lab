console.log('server is online')

// requiring express to its tools. 
const express = require('express'); 

// intializes the express object.  
const app = express();

// const name = ['alex']; 


// Greeting 
app.get('/greeting/:name', (request, response) => {
 console.log(request.params);
 const output = ('Hello ' + request.params.name + " !"); 
 response.send(output);
 // response.send(name); 
});



// tip calculator 
app.get('/tip/:total/:tipPercentage', (request, response) => {
  console.log('-----------------------------------------------');
  console.log(request.params.total, " this is request.params.total"); 
  console.log(request.params.tipPercentage, " this is request.params.tipPercentage"); 
  console.log('-----------------------------------------------');


  // get the total from req.params
  const total = parseFloat(request.params.total); 
  // get the tipPercentage from request.params 
  const tipPercentage = parseFloat(request.params.tipPercentage);

  const result = total * tipPercentage // math equation to get the total and tipPercentage. 

  // response.send("Check your terminal"); 
  response.send(result.toString()); 

});

// Magic 8 Ball 
app.get('/magic/:phrase', (req, res) => {
  const questions = [
    " It is certain", 
    " It is decidedly so", 
    " Without a doubt", 
    " Yes definitely",
    " You may rely on it", 
    " As I see it yes", 
    " Most likely", 
    " Outlook good",
    " Yes", 
    " Signs point to yes", 
    " Reply hazy try again", 
    " Ask again later",
    " Better not tell you now", 
    " Cannot predict now", 
    " Concentrate and ask again",
    " Don't count on it", 
    " My reply is no", 
    " My sources say no",
    " Outlook not so good", 
    " Very doubtful",
  ];

  const randIndex = Math.floor(Math.random() * questions.length);  


  const magicQuestion = (req.params.phrase +  questions[randIndex]); 
  res.send(magicQuestion)

});


// define a route to the server. 
app.get('/', (request, response) => {
  response.send('This is the lab server.');
});

// create a listener on a port for our computer, 
// this is needed to start the server. 
app.listen(4000, () => {
  console.log('I am listening on port 4000'); // this is listening for a request from our client or server
}); 



