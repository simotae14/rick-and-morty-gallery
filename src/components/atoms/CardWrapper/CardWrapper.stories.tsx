import type { Meta, StoryObj } from '@storybook/react';

import CardWrapper from './index';

const meta = {
  title: 'Atoms/CardWrapper',
  component: CardWrapper,
  tags: ['autodocs'],
  argTypes: {
    cardWrapperType: {
      control: {
        options: ['base', 'spinner', 'card'],
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof CardWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardWrapperType: undefined,
  },
};

export const Base: Story = {
  args: {
    cardWrapperType: 'base',
  },
};

export const Card: Story = {
  args: {
    cardWrapperType: 'card',
  },
};

export const Spinner: Story = {
  args: {
    cardWrapperType: 'spinner',
  },
};
