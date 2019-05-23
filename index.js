const fileReader = require('./lib/reader.js');

// Obtain and assert input
console.log(process.argv);
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
