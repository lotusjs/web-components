import LSwitch from './switch.component.js';

LSwitch.define('l-switch');

export default LSwitch;
export * from './switch.component.js';

declare global {
  interface HTMLElementTagNameMap {
    'l-switch': LSwitch;
  }
}
