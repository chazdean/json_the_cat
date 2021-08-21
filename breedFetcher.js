const request = require('request');

const findDescription = (data) => {
  if (data.length === 0) {
    return "Breed Not Found";
  } else {
    return data[0].description;
  }
};

const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (!error) {
      const data = JSON.parse(body);
      callback(null, findDescription(data));
    } else {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };



