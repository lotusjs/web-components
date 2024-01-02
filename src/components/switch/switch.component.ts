import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { defaultValue } from '../../internal/default-value.js';
import { ShoelaceElement } from '../../internal/ShoelaceElement.js';
import styles from './switch.styles.js';

import type { CSSResultGroup } from 'lit';

const prefixCls = 'l-switch';

/** 开关组件 */
export default class Switch extends ShoelaceElement {
  static styles: CSSResultGroup = styles;

  /** 开关大小 */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** 开关样式类型 */
  @property({ reflect: true }) type: 'circle' | 'round' | 'line' = 'circle';

  /** 指示当前是否选中 */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** 是否处于加载中状态 */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** 是否禁用 */
  @property({ type: Boolean, reflect: true }) disabled = false;

  @defaultValue('checked') defaultChecked = false;

  private handleClick() {
    this.checked = !this.checked;
  }

  render() {
    return html`
      <button
        part="base"
        role="switch"
        class=${classMap({
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
        ${this.type !== 'line' ? html` <div class="${prefixCls}-text-holder"></div> ` : ''}
        ${this.type !== 'line' ? html` <div class="${prefixCls}-text"></div> ` : ''}
      </button>
    `;
  }
}
