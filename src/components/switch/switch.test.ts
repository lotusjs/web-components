import { expect, fixture, html } from '@open-wc/testing';
import '../../../dist/lotus.js';

import type LSwitch from './switch.js';

describe('<l-switch>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<LSwitch>(html` <l-switch></l-switch> `);
    await expect(el).to.be.accessible();
  });
});
