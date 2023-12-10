import LSwitch from './switch.components.js';

LSwitch.define('l-badge');

export default LSwitch;
export * from './switch.components.js';

declare global {
  interface HTMLElementTagNameMap {
    'l-switch': LSwitch;
  }
}
