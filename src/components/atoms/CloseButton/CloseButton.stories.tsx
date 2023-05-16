import type { Meta, StoryObj } from '@storybook/react';

import CloseButton from './index';

const meta = {
  title: 'Atoms/CloseButton',
  component: CloseButton,
  tags: ['autodocs'],
  argTypes: {
    onClickClose: {
      action: 'clicked',
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CloseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
