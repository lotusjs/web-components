import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';

export class Button extends LitElement {
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
