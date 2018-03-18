const https = require('https');
const fs = require('fs');

const url = 'https://foster.animalfoundation.com/';
https.get(url, res => {
  res.setEncoding('utf8');
  let body = '';
  res.on('data', data => {
    body += data;
  });
  res.on('end', () => {
    fs.writeFile('foster.html', body, function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    });

  });
});