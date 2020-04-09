const args = (process.argv.slice(2));
const request = require('request');
const fs = require('fs')

let url = args[0]
let filePath = args[1]

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(filePath, body, (err) => {
    if (err) throw err;
    console.log('The file has been saved');
  });
});

// const args = process.argv
// const request = require('request');
// const fs = require('fs');

// let url = args[2];
// let filePath = args[3];

// request(url, (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
//   fs.writeFile(filePath, body, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });
// });