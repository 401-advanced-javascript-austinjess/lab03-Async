const fs = require('fs');
const util = require('util');

const fsReadFile = util.promisify(fs.readFile);

let contents = [];

const readAll = (files) => {
  for (let i = 0; i < files.length; i++) {
    fsReadFile(files[i]).then((data) => {
      return Promise.resolve(data).then((data) =>
        contents.push(data.toString().trim())
      );
    });
  }
  console.log(contents);
  return contents;
};

module.exports = readAll;
