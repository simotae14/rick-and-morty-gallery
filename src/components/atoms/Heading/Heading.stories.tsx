import type { Meta, StoryObj } from '@storybook/react';

import Heading from './index';

const meta = {
  title: 'Atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: 'Rick and Morty Gallery',
  },
};
