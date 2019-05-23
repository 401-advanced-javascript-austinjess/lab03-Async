const fileReader = require('./lib/reader.js');
const asyncFileReader = require('./lib/reader-async.js');
const promiseFileReader = require('./lib/reader-promises.js');
const editFile = require('./lib/edit-file.js');

// Obtain and assert input
const files = process.argv.slice(2);

if (!(files instanceof Array && files.length)) {
  throw new Error('Invalid Args');
}

fileReader(files, (err, data) => {
  if (err) {
    throw err;
  }
  console.log('From Callback:', data);
});

asyncFileReader(files);

promiseFileReader(files);
const fileToEdit = process.argv.slice(2).toString();

editFile(fileToEdit, (err, data) => {
  if (err) {
    throw err;
  }
  console.log('After Data - ', data);
});
