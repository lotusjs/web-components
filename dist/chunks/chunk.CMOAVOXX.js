import {
  badge_styles_default
} from "./chunk.CBWPTQU3.js";
import {
  ShoelaceElement,
  e,
  n
} from "./chunk.FDMCBEAB.js";
import {
  x
} from "./chunk.CI4I3F3P.js";
import {
  __decorateClass
} from "./chunk.PM7NIY3M.js";

// src/components/badge/badge.component.ts
var prefixCls = "l-badge";
var Badge = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.dot = false;
    this.color = "";
    this.showZero = false;
    this.offset = [];
  }
  render() {
    return x`
      <span
        part="base"
        class=${e({
      [prefixCls]: true
    })}
      >
        <slot></slot>
      </span>
    `;
  }
};
Badge.styles = badge_styles_default;
__decorateClass([
  n({ type: Boolean, reflect: true })
], Badge.prototype, "dot", 2);
__decorateClass([
  n({ type: String, reflect: true })
], Badge.prototype, "color", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], Badge.prototype, "showZero", 2);
__decorateClass([
  n({ type: Array, reflect: true })
], Badge.prototype, "offset", 2);

export {
  Badge
};
