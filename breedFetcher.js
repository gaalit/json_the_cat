const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
        
    if (error || response.statusCode !== 200) {
     callback(`Connection failed, error :${error}`);
     return;
    }
  
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback("Cat breed not found",null);
    } else {
     callback(error, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };