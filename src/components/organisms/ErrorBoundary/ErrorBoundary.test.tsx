import { useEffect, useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';

import ErrorBoundary from '.';

expect.extend(toHaveNoViolations);

interface BombProps {
  // eslint-disable-next-line react/require-default-props
  shouldThrow?: boolean;
}

function Bomb({ shouldThrow }: BombProps) {
  const [, setError] = useState(null);
  useEffect(() => {
    if (shouldThrow) {
      setError(() => {
        throw new Error('💣');
      });
    }
  }, [shouldThrow]);
  return <div>Bomb</div>;
}

describe('Components => organisms => ErrorBoundary', () => {
  it('should call not Error Boundary when no error happen', () => {
    const { getByTestId } = render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>
    );
    expect(() => getByTestId('errorboundary')).toThrow();
  });
});
