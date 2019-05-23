// const fs = require('fs');
// const util = require('util');

// let contents = [];

// const readAll = async (files) => {
//   for (let i = 0; i < files.length; i++) {
//     let readOne = util.promisify(fs.readFile);
//     await readOne(files[i])
//       .then((data) => {
//         console.log(`Just read file${i}`);
//         contents.push(data.toString().trim());
//       })
//       .catch((err) => {
//         throw err;
//       });
//   }
//   return contents;
// };

// module.exports = { readAll };
