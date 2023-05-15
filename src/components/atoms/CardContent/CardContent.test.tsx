/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import CardContent from './index';

expect.extend(toHaveNoViolations);

const mockProps = {
  name: 'I am a title',
  image: 'http://image',
  status: 'Alive',
  species: 'Human',
};

describe('Components => atoms => CardContent', () => {
  it('should render the CardContent with the default when no props are passed', () => {
    const { asFragment } = render(<CardContent />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not show the subtitle in CardContent when no props are passed', () => {
    render(<CardContent />);
    const subtitle = screen.queryByText('Alive - Human');
    expect(subtitle?.textContent).not.toBe(/Alive - Human/i);
  });

  it('should render the CardContent with some props passed', () => {
    const { asFragment } = render(<CardContent {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the CardContent title when is passed as prop', () => {
    render(<CardContent {...mockProps} />);
    const h3 = screen.getByRole('heading', { level: 3 });
    expect(h3.textContent).not.toBe(/i am a title/i);
  });

  it('should show the subtitle in CardContent when it is passed as prop', () => {
    render(<CardContent {...mockProps} />);
    const subtitle = screen.queryByText('Alive - Human');
    expect(subtitle?.textContent).toBe('Alive - Human');
  });

  it('should show the image in CardContent when it is passed as prop', () => {
    render(<CardContent {...mockProps} />);
    const image = screen.getByAltText('I am a title') as HTMLImageElement;
    expect(image.alt).toContain('I am a title');
  });

  it('should not fail any accessibility tests the CardContent without props', async () => {
    const { container } = render(<CardContent />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should not fail any accessibility tests the CardContent with props', async () => {
    const { container } = render(<CardContent {...mockProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
