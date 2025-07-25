import { newE2EPage } from '@stencil/core/testing';

describe('claro-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<claro-card></claro-card>');

    const element = await page.find('claro-card');
    expect(element).toHaveClass('hydrated');
  });
});
