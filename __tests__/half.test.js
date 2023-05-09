// @ts-check

import test from 'node:test';
import { expect } from 'expect';
import half from '../index.js';

test('half', () => {
  expect(half(3)).toBe(3);
});
