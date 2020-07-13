import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  cleanup
} from "../../utils/test-utils";

import Drawer from './Drawer'

afterEach(cleanup);

it('Shows Drawer', () => {
    render(<Drawer isShowing={true} />)

    expect(screen.getByTestId('drawer')).toHaveClass('drawer')
})

it('Hides Drawer', () => {
    render(<Drawer isShowing={false} />)

    expect(screen.getByTestId('drawer')).not.toHaveClass('drawer')
})