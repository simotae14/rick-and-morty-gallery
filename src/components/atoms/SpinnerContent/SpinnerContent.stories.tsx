import type { Meta, StoryObj } from '@storybook/react';

import SpinnerContent from './index';

const meta = {
  title: 'Atoms/SpinnerContent',
  component: SpinnerContent,
  tags: ['autodocs'],
} satisfies Meta<typeof SpinnerContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
