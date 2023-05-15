import type { Meta, StoryObj } from '@storybook/react';

import Card from './index';

const meta = {
  title: 'Molecules/Card',
  component: Card,
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
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

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
