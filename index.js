/* eslint-disable unicorn/no-process-exit */
/* eslint-disable no-console */

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';

import { main } from './lib/main.js';

const {
  positionals: [
    outDir,
    ...positionals
  ],
} = parseArgs({
  allowPositionals: true,
});

if (!outDir) {
  console.error('Error: An output directory is required');
  process.exit(1);
}

if (positionals.length === 0) {
  console.error('Error: At least one additional argument is required');
  process.exit(1);
}

try {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  await mkdir(outDir);
} catch {
  // It's okay if it already exists
}

const FILE_EXTENSION = '.txt';

const settled = await Promise.allSettled(positionals.map(async (name) => {
  const data = await main(name);

  // eslint-disable-next-line security/detect-non-literal-fs-filename
  await writeFile(
    path.join(outDir, name + FILE_EXTENSION),
    data,
    'utf8'
  );

  return name;
}));

let failed = false;

for (const status of settled) {
  if (status.status === 'rejected') {
    // type-coverage:ignore-next-line
    console.error('Failed because:', status.reason);
    failed = true;
  } else {
    console.log('Successfully handled:', status.value);
  }
}

if (failed) {
  process.exit(1);
}
