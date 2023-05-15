import type { Meta, StoryObj } from '@storybook/react';

import Pagination from './index';

const meta = {
  title: 'Molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      type: 'number',
    },
    numberPages: {
      type: 'number',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OnePage: Story = {
  args: {
    currentPage: 1,
    numberPages: 1,
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    numberPages: 3,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 2,
    numberPages: 3,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 3,
    numberPages: 3,
  },
};
