import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'claro-card',
  styleUrl: 'claro-card.scss',
  shadow: true,
})
export class ClaroCard {
  render() {
    return (
      <Host>
       <slot></slot>
      </Host>
    );
  }
}
