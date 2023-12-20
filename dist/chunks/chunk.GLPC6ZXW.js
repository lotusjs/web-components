import {
  ShoelaceElement,
  e,
  n
} from "./chunk.FDMCBEAB.js";
import {
  switch_styles_default
} from "./chunk.237DDQL7.js";
import {
  x
} from "./chunk.CI4I3F3P.js";
import {
  __decorateClass
} from "./chunk.PM7NIY3M.js";

// src/components/switch/switch.component.ts
var prefixCls = "l-switch";
var Switch = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.size = "medium";
    this.type = "circle";
    this.checked = false;
    this.loading = false;
    this.disabled = false;
  }
  handleClick() {
    this.checked = !this.checked;
  }
  render() {
    return x`
      <button
        part="base"
        role="switch"
        class=${e({
      [prefixCls]: true,
      [`${prefixCls}-checked`]: this.checked,
      [`${prefixCls}-disabled`]: this.disabled,
      [`${prefixCls}-type-${this.type}`]: this.type,
      [`${prefixCls}-size-${this.size}`]: this.size,
      [`${prefixCls}-loading`]: this.loading
    })}
        .disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <div class="${prefixCls}-dot"></div>
      </button>
    `;
  }
};
Switch.styles = switch_styles_default;
__decorateClass([
  n({ reflect: true })
], Switch.prototype, "size", 2);
__decorateClass([
  n({ reflect: true })
], Switch.prototype, "type", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], Switch.prototype, "checked", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], Switch.prototype, "loading", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], Switch.prototype, "disabled", 2);

export {
  Switch
};
