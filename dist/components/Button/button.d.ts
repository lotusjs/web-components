import LButton from './button.component.js';
export default LButton;
export * from './button.component.js';
declare global {
    interface HTMLElementTagNameMap {
        'l-button': LButton;
    }
}
