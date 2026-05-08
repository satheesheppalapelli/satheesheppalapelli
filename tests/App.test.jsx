import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import App from '../src/App';

describe('App Component', () => {
  test('renders Home component at default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { name: /hi, I'm satheesh eppalapelli/i });
    expect(heading).toBeInTheDocument();
  });
});