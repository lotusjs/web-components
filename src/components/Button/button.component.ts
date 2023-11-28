import { css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ShoelaceElement } from '../../internal/ShoelaceElement';

export default class Button extends ShoelaceElement {
  static styles = css`
    :host {
      color: blue;
    }
  `;

  @property()
  name?: string = 'World';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
