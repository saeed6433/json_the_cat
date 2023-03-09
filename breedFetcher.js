const request = require('request');
const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length) {
      callback(null, data[0].description);
    } else callback (null, 'The requested breed was not found!');
  });
};

module.exports = { fetchBreedDescription };