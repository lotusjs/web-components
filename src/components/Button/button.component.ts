import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { HasSlotController } from '../../internal/slot.js';
import { ShoelaceElement } from '../../internal/ShoelaceElement.js';
import styles from './button.styles.js';

import type { CSSResultGroup } from 'lit';

const prefixCls = 'l-btn';

export default class Button extends ShoelaceElement {
  static styles: CSSResultGroup = styles;
  private readonly hasSlotController = new HasSlotController(this, '[default]', 'prefix', 'suffix');

  /** The button's theme variant. */
  @property({ reflect: true }) variant: 'default' | 'primary' | 'success' = 'default';

  /** The button's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** 主题 */
  @property({ reflect: true }) theme: 'light' | 'solid' | 'borderless' = 'light';

  /** Draws an outlined button. */
  @property({ type: Boolean, reflect: true }) outline = false;

  render() {
    return html`
      <button
        class=${classMap({
          [prefixCls]: true,
          [`${prefixCls}-${this.theme}`]: this.theme !== 'light',
        })}
      >
        <slot part="label" class="button__label"></slot>
      </button>
    `;
  }
}
