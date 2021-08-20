const request = require('request');
const userInput = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
 
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  console.log(data);

  if (data.length === 0) {
    console.log("Breed Not Found");
    return;
  }
  
  console.log(data[0].description);
});

