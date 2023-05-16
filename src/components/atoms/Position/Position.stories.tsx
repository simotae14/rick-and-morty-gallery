import type { Meta, StoryObj } from '@storybook/react';

import Position from './index';

const meta = {
  title: 'Atoms/Position',
  component: Position,
  tags: ['autodocs'],
  argTypes: {
    labelType: {
      control: {
        type: 'text',
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
    type: {
      control: {
        type: 'text',
      },
    },
    dimension: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Position>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    labelType: 'Origin',
    name: 'Earth (C-137)',
    type: 'Planet',
    dimension: 'Dimension C-137',
  },
};
