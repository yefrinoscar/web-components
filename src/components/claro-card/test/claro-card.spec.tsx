import { newSpecPage } from '@stencil/core/testing';
import { ClaroCard } from '../claro-card';

describe('claro-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClaroCard],
      html: `<claro-card></claro-card>`,
    });
    expect(page.root).toEqualHtml(`
      <claro-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </claro-card>
    `);
  });
});
