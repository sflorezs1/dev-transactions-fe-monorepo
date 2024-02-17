import { render } from '@testing-library/react';

import FileTypes from './FileTypes';

describe('FileTypes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FileTypes />);
    expect(baseElement).toBeTruthy();
  });
});
