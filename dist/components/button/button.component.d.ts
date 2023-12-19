import { ShoelaceElement } from '../../internal/ShoelaceElement.js';
import type { CSSResultGroup } from 'lit';
export default class Button extends ShoelaceElement {
    static styles: CSSResultGroup;
    /** The button's theme variant. */
    variant: 'default' | 'primary' | 'success';
    /** 按钮大小 */
    size: 'small' | 'medium' | 'large';
    /**
     * 按钮主题
     * solid: 有背景色
     * light: 浅背景色
     * borderless: 无背景色
     */
    theme: 'light' | 'solid' | 'borderless';
    /** 块级按钮 */
    block: boolean;
    /** 禁用状态 */
    disabled: boolean;
    /** 加载状态 */
    loading: boolean;
    /** Draws an outlined button. */
    outline: boolean;
    render(): import("lit").TemplateResult<1>;
}
