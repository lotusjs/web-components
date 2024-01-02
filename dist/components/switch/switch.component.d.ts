import { ShoelaceElement } from '../../internal/ShoelaceElement.js';
import type { CSSResultGroup } from 'lit';
/** 开关组件 */
export default class Switch extends ShoelaceElement {
    static styles: CSSResultGroup;
    /** 开关大小 */
    size: 'small' | 'medium' | 'large';
    /** 开关样式类型 */
    type: 'circle' | 'round' | 'line';
    /** 指示当前是否选中 */
    checked: boolean;
    /** 是否处于加载中状态 */
    loading: boolean;
    /** 是否禁用 */
    disabled: boolean;
    defaultChecked: boolean;
    private handleClick;
    render(): import("lit").TemplateResult<1>;
}
