import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class ShoelaceElement extends LitElement {
  // Make localization attributes reactive
  @property() dir: string;
  @property() lang: string;

  static define(name: string, elementConstructor = this, options: ElementDefinitionOptions = {}) {
    const currentlyRegisteredConstructor = customElements.get(name) as
      | CustomElementConstructor
      | typeof ShoelaceElement;

    if (!currentlyRegisteredConstructor) {
      customElements.define(name, class extends elementConstructor {} as unknown as CustomElementConstructor, options);
      return;
    }

    let newVersion = ' (unknown version)';
    let existingVersion = newVersion;

    if ('version' in elementConstructor && elementConstructor.version) {
      newVersion = ' v' + elementConstructor.version;
    }

    if ('version' in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
      existingVersion = ' v' + currentlyRegisteredConstructor.version;
    }

    // Need to make sure we're not working with null or empty strings before doing version comparisons.
    if (newVersion && existingVersion && newVersion === existingVersion) {
      // If versions match, we don't need to warn anyone. Carry on.
      return;
    }

    console.warn(
      `Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`
    );
  }

  static dependencies: Record<string, typeof ShoelaceElement> = {};

  constructor() {
    super();
    Object.entries((this.constructor as typeof ShoelaceElement).dependencies).forEach(([name, component]) => {
      (this.constructor as typeof ShoelaceElement).define(name, component);
    });
  }
}
