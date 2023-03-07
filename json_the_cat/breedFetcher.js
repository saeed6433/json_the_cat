const request = require('request');
const breedName = process.argv.slice(2);
request(`https://api.thecaapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body); // String

  if (!error){
    const data = JSON.parse(body);
    console.log(data.length > 0 ? data[0].description : 'The requested breed was not found!');
  } else console.log (error);
});