import LBadge from './badge.component.js';

LBadge.define('l-badge');

export default LBadge;
export * from './badge.component.js';

declare global {
  interface HTMLElementTagNameMap {
    'l-badge': LBadge;
  }
}
