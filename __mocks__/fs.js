'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if (!file || file.match(/bad/i)) {
    cb(`${file} has an error`);
  } else {
    setTimeout(() => {
      cb(undefined, Buffer.from(`${file} contents!`));
    });
  }
};
