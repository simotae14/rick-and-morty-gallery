/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Card from './index';

expect.extend(toHaveNoViolations);

const mockProps = {
  name: 'I am a title',
  image: 'http://image',
  status: 'Alive',
  species: 'Human',
};

const mockDeadCharacterProps = {
  name: 'I am a title',
  image: 'http://image',
  status: 'Dead',
  species: 'Human',
};

describe('Components => molecules => Card', () => {
  it('should render the Card with the default when no props are passed', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not show the subtitle in Card when no props are passed', () => {
    render(<Card />);
    const subtitle = screen.queryByText('Alive - Human');
    expect(subtitle?.textContent).not.toBe(/Alive - Human/i);
  });

  it('should render the Card with some props passed', () => {
    const { asFragment } = render(<Card {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the Card with some props passed as dead character', () => {
    const { asFragment } = render(<Card {...mockDeadCharacterProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the Card title when is passed as prop', () => {
    render(<Card {...mockProps} />);
    const h3 = screen.getByRole('heading', { level: 3 });
    expect(h3.textContent).not.toBe(/i am a title/i);
  });

  it('should show the subtitle in Card when it is passed as prop', () => {
    render(<Card {...mockProps} />);
    const subtitle = screen.queryByText('Alive - Human');
    expect(subtitle?.textContent).toBe('Alive - Human');
  });

  it('should show the image in Card when it is passed as prop', () => {
    render(<Card {...mockProps} />);
    const image = screen.getByAltText('I am a title') as HTMLImageElement;
    expect(image.alt).toContain('I am a title');
  });

  it('should not fail any accessibility tests the Card without props', async () => {
    const { container } = render(<Card />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should not fail any accessibility tests the Card with props', async () => {
    const { container } = render(<Card {...mockProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
