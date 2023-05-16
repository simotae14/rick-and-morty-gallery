import type { Meta, StoryObj } from '@storybook/react';

import Layout from './index';

const meta = {
  title: 'Molecules/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>content</div>,
  },
};
