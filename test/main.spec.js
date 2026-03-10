import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { assertType } from '@voxpelli/typed-utils';

import { main } from '../lib/main.js';

describe('something', () => {
  it('should work', async () => {
    const result = await main('foo');

    assertType(result, 'string');
    assert.equal(result, 'Name: foo');
  });
});
