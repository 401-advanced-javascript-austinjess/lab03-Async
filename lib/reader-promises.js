const fs = require('fs');
const util = require('util');

const fsReadFile = util.promisify(fs.readFile);

let contents = [];

const readAll = (files) => {
  // return files.reduce(
  //   (promise, file) =>
  //     // will this automatically fill contents???
  //     promise.then((contents) =>
  //       fsReadFile(file).then((data) => [...contents, data.toString().trim()])
  //     ),
  //   Promise.resolve([])
  // );

  let result = Promise.resolve();

  for (let i = 0; i < files.length; i++) {
    result = result
      .then(() => fsReadFile(files[i]))
      .then((data) => {
        console.log(data.toString());
        contents.push(data.toString().trim());
      })
      .catch((err) => {
        throw err;
      });
  }

  return result.then(() => {
    console.log(contents);
    return contents;
  });
};

module.exports = readAll;
