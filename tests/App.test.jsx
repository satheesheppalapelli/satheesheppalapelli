import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Home from '../src/sections/Home';

// Polyfill IntersectionObserver for testing environment
if (typeof window !== 'undefined' && !window.IntersectionObserver) {
  window.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

// Mock useNavigate
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(), // Vitest mock function
  };
});

describe('Home Component', () => {
  test('renders main heading', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { name: /hi, I'm satheesh eppalapelli/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders all navigation buttons', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const buttons = [
      'Skills',
      'Experience',
      'Projects',
      'Education',
      'Certification',
      'Early Spark'
    ];

    buttons.forEach((text) => {
      expect(screen.getByRole('button', { name: text })).toBeInTheDocument();
    });
  });

  test('renders animated type text', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Only check if the TypeAnimation wrapper exists
    const typeWrapper = screen.getByText(/Software Engineer/i);
    expect(typeWrapper).toBeInTheDocument();
  });

  test('renders developer GIF image', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const image = screen.getByAltText(/developer working animation/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('giphy.com'));
  });
});