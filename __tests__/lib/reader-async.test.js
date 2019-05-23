'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-async.js');

xdescribe('Async File Reader Module', async () => {
  it('when given a bad file, returns an error', (done) => {
    let files = ['bad.txt', 'good.txt', 'good.txt'];
  });
});

// it('runs with async/await (good result/resolve)', async () => {
//   try {
//     let result = await asyncModule.promiserOfThings('do something');
//     expect(result).toEqual('do something');
//   }
//   catch(err) { expect(err).not.toBeDefined(); }
// });

// it('runs with async/await (bad result/reject)', async () => {
//   try {
//     let result = await asyncModule.promiserOfThings(false)
//     expect(result).toBeUndefined();
//   }
//   catch(err) { expect(err).toBeDefined(); }
// });
