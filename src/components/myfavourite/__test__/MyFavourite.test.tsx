import { render } from '@testing-library/react';
import MyFavourite from '../MyFavourite';
import { describe, it, expect } from 'vitest';

describe('MyFavourite', () => {
  it('should render the favourite icon in the DOM', () => {
    const { container } = render(<MyFavourite iconColor="red" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});