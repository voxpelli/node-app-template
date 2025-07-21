import chai from 'chai';

// TODO: Replace with proper setup
import { main } from '../lib/main.js';

chai.should();

describe('something', () => {
  it('should work', async () => {
    const result = await main('foo');
    result.should.equal('Name: foo');
  });
});
