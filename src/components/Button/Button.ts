import LButton from './button.component.js';

LButton.define('l-button');

export default LButton;
export * from './button.component.js';

declare global {
  interface HTMLElementTagNameMap {
    'l-button': LButton;
  }
}
