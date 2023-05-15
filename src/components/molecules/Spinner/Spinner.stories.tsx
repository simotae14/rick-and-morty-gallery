import type { Meta, StoryObj } from '@storybook/react';

import Spinner from './index';

const meta = {
  title: 'Molecules/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
