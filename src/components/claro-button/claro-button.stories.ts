import { html } from 'lit';
import './claro-button';

export default {
  title: 'Components/ClaroButton',
  component: 'claro-button',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'normal', 'hover', 'disabled'],
      description: 'Button variant',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    icon: {
      control: 'boolean',
      description: 'Whether the button has an icon',
    },
    text: {
      control: 'text',
      description: 'Button text',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    icon: false,
    text: 'Button',
  },
};

const Template = (args) => html`
  <claro-button
    variant="${args.variant}"
    size="${args.size}"
    .disabled=${args.disabled}
    .icon=${args.icon}
    text="${args.text}"
  >
    ${args.icon ? html`
      <svg
        slot="icon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
          fill="currentColor"
        />
      </svg>
    ` : ''}
  </claro-button>
`;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  text: 'Btn Primario',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  text: 'Btn Secundario',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  text: 'Btn Terciario',
};

export const Normal = Template.bind({});
Normal.args = {
  variant: 'normal',
  text: 'Btn Normal',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: 'Btn Disabled',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: 'primary',
  text: 'Acción Primaria',
  icon: true,
};

export const AllSizes = () => html`
  <div style="display: flex; align-items: center; gap: 1rem;">
    <claro-button variant="primary" size="xs" text="XS"></claro-button>
    <claro-button variant="primary" size="sm" text="SM"></claro-button>
    <claro-button variant="primary" size="md" text="MD"></claro-button>
    <claro-button variant="primary" size="lg" text="LG"></claro-button>
    <claro-button variant="primary" size="xl" text="XL"></claro-button>
  </div>
`;
