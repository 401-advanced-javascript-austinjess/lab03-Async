const readAll = require('../../lib/reader-promises.js');

describe('Promise File Reader Module', () => {
  it('when given a bad file, returns an error', (done) => {
    let files = ['bad.txt', 'good.txt', 'good.txt'];
    return readAll(files).then((result) => {
      expect(result).toBe;
    });
  });
});
