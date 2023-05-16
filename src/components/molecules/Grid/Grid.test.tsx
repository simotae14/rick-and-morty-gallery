/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Grid from '.';

expect.extend(toHaveNoViolations);

describe('Components => molecules => Grid', () => {
  it('should render the Grid', () => {
    const { asFragment } = render(
      <Grid>
        <div>div1</div>
        <div>div2</div>
        <div>div3</div>
        <div>div4</div>
        <div>div5</div>
        <div>div6</div>
        <div>div7</div>
        <div>div8</div>
        <div>div9</div>
        <div>div10</div>
        <div>div11</div>
        <div>div12</div>
      </Grid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not fail any accessibility tests', async () => {
    const { container } = render(
      <Grid>
        <div>div1</div>
        <div>div2</div>
        <div>div3</div>
        <div>div4</div>
        <div>div5</div>
        <div>div6</div>
        <div>div7</div>
        <div>div8</div>
        <div>div9</div>
        <div>div10</div>
        <div>div11</div>
        <div>div12</div>
      </Grid>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
