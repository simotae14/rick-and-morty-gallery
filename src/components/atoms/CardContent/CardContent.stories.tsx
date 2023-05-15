import type { Meta, StoryObj } from '@storybook/react';

import CardContent from './index';

const meta = {
  title: 'Atoms/CardContent',
  component: CardContent,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
    image: {
      control: {
        type: 'text',
      },
    },
    status: {
      control: {
        type: 'text',
      },
    },
    species: {
      control: {
        type: 'text',
      },
    },
  },
  // The default value of the name arg to all stories
  args: { name: 'No Character' },
} satisfies Meta<typeof CardContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyProps: Story = {
  args: {
    name: undefined,
  },
};

export const WithProps: Story = {
  args: {
    name: 'Jerry Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    status: 'Alive',
    species: 'Human',
  },
};
