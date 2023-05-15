/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { axe, toHaveNoViolations } from 'jest-axe';

import { App } from './App';
import { GET_CHARACTERS_QUERY } from './graphql';

expect.extend(toHaveNoViolations);

const mock = [
  {
    request: {
      query: GET_CHARACTERS_QUERY,
      variables: {
        page: 1,
      },
    },
    result: {
      data: {
        characters: {
          info: {
            count: 826,
            pages: 42,
          },
          results: [],
        },
      },
    },
  },
];

const mockWithError = [
  {
    request: {
      query: GET_CHARACTERS_QUERY,
      variables: {
        page: 1,
      },
    },
    error: new Error('An error occured'),
  },
];

describe('App', () => {
  it('Renders hello world', async () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={['/']}>
        <MockedProvider mocks={mock} addTypename={false}>
          <App />
        </MockedProvider>
      </MemoryRouter>
    );
    // ACT
    // EXPECT
    expect(
      await screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
  it('should show error UI', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MockedProvider mocks={mockWithError} addTypename={false}>
          <App />
        </MockedProvider>
      </MemoryRouter>
    );
    expect(await screen.findByText('error')).toBeInTheDocument();
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <MockedProvider mocks={mock} addTypename={false}>
          <App />
        </MockedProvider>
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });

  it('should not fail any accessibility tests', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <MockedProvider mocks={mock} addTypename={false}>
          <App />
        </MockedProvider>
      </MemoryRouter>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
