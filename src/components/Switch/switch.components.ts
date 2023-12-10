import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
// import { HasSlotController } from '../../internal/slot.js';
import { ShoelaceElement } from '../../internal/ShoelaceElement.js';
import styles from './switch.styles.js';

import type { CSSResultGroup } from 'lit';

const prefixCls = 'l-switch';

/** 开关组件 */
export default class Switch extends ShoelaceElement {
  static styles: CSSResultGroup = styles;
  // private readonly hasSlotController = new HasSlotController(this, '[default]', 'prefix', 'suffix');

  /** 展示为小红点 */
  @property({ type: Boolean, reflect: true }) dot = false;

  /** 自定义小圆点的颜色 */
  @property({ type: String, reflect: true }) color = '';

  /** 当数值为 0 时，是否展示 Badge */
  @property({ type: Boolean, reflect: true }) showZero = false;

  /** 设置状态点的位置偏移 */
  @property({ type: Array, reflect: true }) offset = [];

  render() {
    return html`
      <span
        part="base"
        class=${classMap({
          [prefixCls]: true,
        })}
      >
        <slot></slot>
      </span>
    `;
  }
}
