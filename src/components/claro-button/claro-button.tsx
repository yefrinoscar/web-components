import { Component, Prop, h, Host } from '@stencil/core';

/**
 * @name Claro Button
 * @description A customizable button component with multiple variants
 */
@Component({
  tag: 'claro-button',
  styleUrl: 'claro-button.css',
  shadow: true,
})
export class ClaroButton {
  /**
   * The button variant
   */
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' | 'normal' | 'hover' | 'disabled' = 'primary';

  /**
   * Button size
   */
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /**
   * Button is disabled
   */
  @Prop() disabled: boolean = false;

  /**
   * Button with icon
   */
  @Prop() icon: boolean = false;

  /**
   * Button text
   */
  @Prop() text: string = '';

  render() {
    const finalVariant = this.disabled ? 'disabled' : this.variant;
    const classes = {
      'claro-button': true,
      [`claro-button--${finalVariant}`]: true,
      [`claro-button--${this.size}`]: true,
      'claro-button--icon': this.icon,
      'claro-button--disabled': this.disabled,
    };

    return (
      <Host>
        <button
          class={Object.entries(classes)
            .filter(([, isActive]) => isActive)
            .map(([className]) => className)
            .join(' ')}
          disabled={this.disabled}
          aria-disabled={this.disabled ? 'true' : 'false'}
        >
          <span class="claro-button__text">{this.text}</span>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
