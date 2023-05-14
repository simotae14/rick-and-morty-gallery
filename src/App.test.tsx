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

const mocks = [
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

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={['/']}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <App />
        </MockedProvider>
      </MemoryRouter>
    );
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <MockedProvider mocks={mocks} addTypename={false}>
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
        <MockedProvider mocks={mocks} addTypename={false}>
          <App />
        </MockedProvider>
      </MemoryRouter>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
