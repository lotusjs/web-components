import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ShoelaceElement } from '../../internal/ShoelaceElement';
import styles from './button.styles';

import type { CSSResultGroup } from 'lit';

export default class Button extends ShoelaceElement {
  static styles: CSSResultGroup = styles;

  @property()
  name?: string = 'World';

  render() {
    return html`
      <button
        class=${classMap({ button: true })}
      >
        Hello, ${this.name}
      </button>
    `;
  }
}
