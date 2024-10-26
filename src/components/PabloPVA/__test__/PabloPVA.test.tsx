import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import PabloPVA from '../PabloPVA';

describe('PabloPVA component', () => {
  it('El componente PabloPVA se debería renderizar correctamente', () => {
    render(
      <PabloPVA
        title="Test Title"
        description="Test Description"
        avatar="https://example.com/avatar.jpg"
      />
    );
    
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();

    const description = screen.getByText('Test Description');
    expect(description).toBeInTheDocument();
    

    const avatar = screen.getByAltText('Test Title');
    expect(avatar).toBeInTheDocument();
  });
});
