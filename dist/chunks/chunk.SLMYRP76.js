import {
  i
} from "./chunk.CI4I3F3P.js";

// src/components/Switch/switch.styles.ts
var switch_styles_default = i`
  .l-switch {
    position: relative;
    padding: 0;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    border: 0;
    outline: none;
    height: 24px;
    min-width: 40px;
    line-height: 24px;
    overflow: hidden;
    vertical-align: middle;
    border-radius: 100px;
    background-color: rgba(0, 0, 0, 0.25);
    transition: background-color 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  }
  .l-switch-checked {
    background-color: #1677ff;
  }
  .l-switch-dot {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #fff;
    font-size: 12px;
    transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  }
  .l-switch-checked .l-switch-dot {
    left: calc(100% - 20px);
  }
  .l-switch[disabled] {
    cursor: not-allowed;
    opacity: 0.65;
  }
  .l-switch-size-large {
    height: 32px;
    line-height: 32px;
    min-width: 54px;
  }
  .l-switch-size-large.l-switch-checked {
    padding-left: -2px;
  }
  .l-switch-size-large .l-switch-dot {
    top: 6px;
    left: 6px;
    width: 20px;
    height: 20px;
    border-radius: 16px;
  }
  .l-switch-size-large .l-switch-dot-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.66667);
  }
  .l-switch-size-large.l-switch-checked .l-switch-dot {
    left: calc(100% - 20px - 6px);
  }
  .l-switch-size-small {
    height: 16px;
    line-height: 16px;
    min-width: 28px;
  }
  .l-switch-size-small.l-switch-checked {
    padding-left: -2px;
  }
  .l-switch-size-small .l-switch-dot {
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
    border-radius: 8px;
  }
  .l-switch-size-small .l-switch-dot-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.66667);
  }
  .l-switch-size-small.l-switch-checked .l-switch-dot {
    left: calc(100% - 12px - 2px);
  }
  .l-switch-type-round {
    border-radius: 2px;
    min-width: 40px;
  }
  .l-switch-type-round .l-switch-dot {
    border-radius: 2px;
  }
  .l-switch-type-round.l-switch-size-large {
    border-radius: 2px;
    height: 32px;
    line-height: 32px;
    min-width: 54px;
  }
  .l-switch-type-round.l-switch-size-small {
    border-radius: 2px;
    height: 16px;
    line-height: 16px;
    min-width: 28px;
  }
  .l-switch-type-round.l-switch-size-small .l-switch-dot {
    border-radius: 1px;
  }
  .l-switch-type-line {
    min-width: 36px;
    background-color: transparent;
    overflow: unset;
  }
  .l-switch-type-line::after {
    content: "";
    display: block;
    width: 100%;
    border-radius: 3px;
    height: 6px;
    background-color: rgba(0, 0, 0, 0.25);
    transition: background-color 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  }
  .l-switch-type-line .l-switch-dot {
    top: 2px;
    left: 0;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  }
  .l-switch-type-line.l-switch-checked {
    background-color: transparent;
  }
  .l-switch-type-line.l-switch-checked::after {
    background-color: #1677ff;
  }
  .l-switch-type-line.l-switch-checked .l-switch-dot {
    left: calc(100% - 20px);
  }
  .l-switch-type-line.l-switch-size-large {
    height: 32px;
    line-height: 32px;
    min-width: 44px;
  }
  .l-switch-type-line.l-switch-size-large.l-switch-checked {
    padding-left: -4px;
  }
  .l-switch-type-line.l-switch-size-large .l-switch-dot {
    top: 4px;
    width: 24px;
    height: 24px;
    border-radius: 16px;
  }
  .l-switch-type-line.l-switch-size-large .l-switch-dot-icon {
    transform: translate(-50%, -50%) scale(1);
  }
  .l-switch-type-line.l-switch-size-small.l-switch-checked .l-switch-dot {
    left: calc(100% - 24px);
  }
  .l-switch-type-line.l-switch-size-small {
    height: 16px;
    line-height: 16px;
    min-width: 28px;
  }
  .l-switch-type-line.l-switch-size-small.l-switch-checked {
    padding-left: 0px;
  }
  .l-switch-type-line.l-switch-size-small .l-switch-dot {
    top: 0px;
    width: 16px;
    height: 16px;
    border-radius: 8px;
  }
  .l-switch-type-line.l-switch-size-small .l-switch-dot-icon {
    transform: translate(-50%, -50%) scale(1);
  }
  .l-switch-type-line.l-switch-size-small.l-switch-checked .l-switch-dot {
    left: calc(100% - 16px);
  }
`;

export {
  switch_styles_default
};
