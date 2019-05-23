'use strict';

jest.mock('fs');

const readAll = require('../../lib/reader-async.js');

describe('Async File Reader Module', () => {
  it('when given a bad file, returns an error', async () => {
    let files = ['bad.txt', 'good.txt', 'good.txt'];
    try {
      let result = await readAll(files);
      expect(result).toBeUndefined();
    } catch (err) {
      expect(err).toBeDefined();
    }
  });

  it('can read 3 files', async () => {
    let files = ['good.txt', 'good.txt', 'good.txt'];
    try {
      let result = await readAll(files);
      expect(result).toHaveLength(3);
    } catch (err) {
      expect(err).not.toBeDefined();
    }
  });
});
