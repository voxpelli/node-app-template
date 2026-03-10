import { describe, expect, it } from 'tstyche';

import { main } from '../lib/main.js';

describe('main export', () => {
  it('should have expected main signature', () => {
    expect(main).type.toBeAssignableTo<(name: string) => Promise<string>>();
  });
});
