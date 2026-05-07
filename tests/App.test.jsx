import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from '../src/App';

if (typeof window !== 'undefined' && !window.IntersectionObserver) {
  window.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

describe('Portfolio App', () => {
  test('renders hero heading and resume link', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /hi, i'm satheesh eppalapelli/i })).toBeDefined();
    expect(screen.getByRole('link', { name: /resume/i }).getAttribute('href')).toBe('/resume.pdf');
    expect(screen.getByRole('link', { name: /about/i })).toBeDefined();
  });
});
