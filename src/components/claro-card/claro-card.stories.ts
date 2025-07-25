import { html } from 'lit';
import './claro-card';
import '../claro-button/claro-button';

export default {
  title: 'Components/ClaroCard',
  component: 'claro-card',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined'],
      description: 'Card variant',
    },
    title: {
      control: 'text',
      description: 'Card title',
    },
    subtitle: {
      control: 'text',
      description: 'Card subtitle',
    },
  },
  args: {
    variant: 'default',
    title: 'Card Title',
    subtitle: 'Card Subtitle',
  },
};

const Template = (args) => html`
  <claro-card
    variant="${args.variant}"
    title="${args.title}"
    subtitle="${args.subtitle}"
  >
    ${args.media ? html`
      <div slot="media">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Placeholder"
          style="width: 100%; height: auto;"
        />
      </div>
    ` : ''}
    <div slot="content">
      <p>${args.content || 'This is the card content. You can add any HTML here.'}</p>
    </div>
    <div slot="footer">
      <claro-button variant="primary" text="Action"></claro-button>
      ${args.showCancel ? html`<claro-button variant="secondary" text="Cancel"></claro-button>` : ''}
    </div>
  </claro-card>
`;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  title: 'Default Card',
  subtitle: 'This is a default card',
  showCancel: true,
};

export const Elevated = Template.bind({});
Elevated.args = {
  variant: 'elevated',
  title: 'Elevated Card',
  subtitle: 'This card has elevation',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  title: 'Outlined Card',
  subtitle: 'This card has an outline',
};

export const WithImage = Template.bind({});
WithImage.args = {
  variant: 'default',
  title: 'Card with Image',
  subtitle: 'This card includes an image',
  content: 'This card includes an image in the media slot.',
  media: true,
};
