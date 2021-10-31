import { render } from '@testing-library/react';

import { SeatTime } from './SeatTime';

describe('SeatTime', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SeatTime />);
    expect(baseElement).toBeTruthy();
  });
});
