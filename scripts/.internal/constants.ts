import { join } from 'node:path';

const ROOT = join(__dirname, '../../');

export const PATHS = {
  ROOT,
} as const;
