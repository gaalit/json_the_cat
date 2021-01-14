const request = require('request');
const fs = require('fs');

const command = process.argv.slice(2);
const path = command[0];




request(`https://api.thecatapi.com/v1/breeds/search?q=${path}`, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.log('error:', error);
    console.log("this is the statusCode ",response.statusCode);
    return;
  }
  
  const data = JSON.parse(body);
 

  if (data.length === 0) {
    console.log("Cat breed not found");
    return;
  }

  fs.writeFile(`catBreeds.txt`, body, (err) => { // copies the path file onto our computer
    if (err) throw err;
    console.log(data[0].description);
    

  });
});

