import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--l-input-border-width);
    font-family: var(--l-input-font-family);
    font-weight: var(--l-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
  }

  /* Default */
  .button--standard.button--default {
    background-color: var(--l-color-neutral-0);
    border-color: var(--l-color-neutral-300);
    color: var(--l-color-neutral-700);
  }

  .button--medium {
    height: auto;
    min-height: var(--l-input-height-medium);
    font-size: var(--l-button-font-size-medium);
    line-height: calc(var(--l-input-height-medium) - var(--l-input-border-width) * 2);
    border-radius: var(--l-input-border-radius-medium);
  }

  .button__label {
    display: inline-block;
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--l-spacing-medium);
  }
`
