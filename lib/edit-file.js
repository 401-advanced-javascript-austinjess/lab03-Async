const fs = require('fs');

const writeToFile = (fileToEdit, callback) => {
  fs.readFile(fileToEdit, (err, data) => {
    if (err) {
      callback(err);
    } else {
      let beforeData = data.toString();
      console.log('Before Data: ' + beforeData);
      // generate random data to add to file
      let randomValue = Math.random().toString();
      fs.writeFile(fileToEdit, randomValue, (err) => {
        if (err) {
          return callback(err);
        } else {
          fs.readFile(fileToEdit, (err, data) => {
            if (err) {
              return callback(err);
            } else {
              callback(undefined, data.toString());
            }
          });
        }
      });
    }
  });
};

module.exports = writeToFile;
