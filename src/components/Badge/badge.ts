import LBadge from './badge.components.js';

LBadge.define('l-badge');

export default LBadge;
export * from './badge.components.js';

declare global {
  interface HTMLElementTagNameMap {
    'l-badge': LBadge;
  }
}
