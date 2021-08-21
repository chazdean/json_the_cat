const request = require('request');

/* const findDescription = (data) => {
  if (data.length === 0) {
    return "Breed Not Found";
  } else {
    return data[0].description;
  }
}; */

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error || response.statusCode !== 200) {
      callback(error, null);
      return;
    }
    
    const data = JSON.parse(body);
    if (data.length !== 0) {
      callback(null, data[0].description);
    } else {
      callback("Breed Not Found", null);
    }
  });
};

module.exports = { fetchBreedDescription };



