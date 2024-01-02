import {
  switch_styles_default
} from "./chunk.237DDQL7.js";
import {
  ShoelaceElement,
  e,
  n
} from "./chunk.FDMCBEAB.js";
import {
  u,
  x
} from "./chunk.CI4I3F3P.js";
import {
  __decorateClass
} from "./chunk.PM7NIY3M.js";

// src/internal/default-value.ts
var defaultValue = (propertyName = "value") => (proto, key) => {
  const ctor = proto.constructor;
  const attributeChangedCallback = ctor.prototype.attributeChangedCallback;
  ctor.prototype.attributeChangedCallback = function(name, old, value) {
    var _a;
    const options = ctor.getPropertyOptions(propertyName);
    const attributeName = typeof options.attribute === "string" ? options.attribute : propertyName;
    if (name === attributeName) {
      const converter = options.converter || u;
      const fromAttribute = typeof converter === "function" ? converter : (_a = converter == null ? void 0 : converter.fromAttribute) != null ? _a : u.fromAttribute;
      const newValue = fromAttribute(value, options.type);
      if (this[propertyName] !== newValue) {
        this[key] = newValue;
      }
    }
    attributeChangedCallback.call(this, name, old, value);
  };
};

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
    this.defaultChecked = false;
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
        ${this.type !== "line" ? x` <div class="${prefixCls}-text-holder"></div> ` : ""}
        ${this.type !== "line" ? x` <div class="${prefixCls}-text"></div> ` : ""}
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
__decorateClass([
  defaultValue("checked")
], Switch.prototype, "defaultChecked", 2);

export {
  Switch
};
