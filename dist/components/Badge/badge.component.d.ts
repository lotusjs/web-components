import { ShoelaceElement } from '../../internal/ShoelaceElement.js';
import type { CSSResultGroup } from 'lit';
/** 徽标组件 */
export default class Badge extends ShoelaceElement {
    static styles: CSSResultGroup;
    /** 展示为小红点 */
    dot: boolean;
    /** 自定义小圆点的颜色 */
    color: string;
    /** 当数值为 0 时，是否展示 Badge */
    showZero: boolean;
    /** 设置状态点的位置偏移 */
    offset: never[];
    render(): import("lit").TemplateResult<1>;
}
