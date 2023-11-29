import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { HasSlotController } from '../../internal/slot.js';
import { ShoelaceElement } from '../../internal/ShoelaceElement.js';
import styles from './button.styles';

import type { CSSResultGroup } from 'lit';

export default class Button extends ShoelaceElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'prefix', 'suffix');

  /** The button's theme variant. */
  @property({ reflect: true }) variant: 'default' | 'primary' | 'success' = 'default';

  /** The button's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Draws an outlined button. */
  @property({ type: Boolean, reflect: true }) outline = false;

  render() {
    return html`
      <button
        class=${classMap({
          button: true,
          'button--default': this.variant === 'default',
          'button--medium': this.size === 'medium',
          'button--standard': !this.outline,
          'button--has-label': this.hasSlotController.test('[default]'),
        })}
      >
        <slot part="label" class="button__label"></slot>
      </button>
    `;
  }
}
