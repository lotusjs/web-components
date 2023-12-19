import {
  button_styles_default
} from "./chunk.25NS7DYT.js";
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

// src/components/Button/button.component.ts
var prefixCls = "l-btn";
var Button = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.variant = "default";
    this.size = "medium";
    this.theme = "light";
    this.block = false;
    this.disabled = false;
    this.loading = false;
    this.outline = false;
  }
  render() {
    return x`
      <button
        class=${e({
      [prefixCls]: true,
      [`${prefixCls}-${this.theme}`]: this.theme !== "light"
    })}
      >
        <slot part="label" class="button__label"></slot>
      </button>
    `;
  }
};
Button.styles = button_styles_default;
__decorateClass([
  n({ reflect: true })
], Button.prototype, "variant", 2);
__decorateClass([
  n({ reflect: true })
], Button.prototype, "size", 2);
__decorateClass([
  n({ reflect: true })
], Button.prototype, "theme", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], Button.prototype, "block", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], Button.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], Button.prototype, "loading", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], Button.prototype, "outline", 2);

export {
  Button
};
