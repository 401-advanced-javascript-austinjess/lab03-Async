const readAll = require('../../lib/reader-promises');

jest.mock('fs');

describe('Promise File Reader Module', () => {
  // it('when given a bad file, returns an error', (done) => {
  //   let files = ['bad.txt', 'good.txt', 'good.txt'];
  //   readAll(files).then(data => {
  //     expect(data).toHaveLength()
  //   })
  //   done();
  // });

  it('can read 3 files', (done) => {
    let files = ['good.txt', 'good.txt', 'good.txt'];
    readAll(files).then((data) => {
      expect(data).toHaveLength(3);
      done();
    });
  });
});
