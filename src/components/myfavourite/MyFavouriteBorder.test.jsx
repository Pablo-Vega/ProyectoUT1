import { render } from '@testing-library/react';
import MyFavouriteBorder from './MyFavouriteBorder';
import { describe, it, expect } from 'vitest';

describe('MyFavouriteBorder', () => {
  it('should render the favourite border icon in the DOM', () => {
    const { container } = render(<MyFavouriteBorder iconColor="black" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});