import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Booking from '../views/Booking';
import { BrowserRouter } from 'react-router-dom';

describe('Booking', () => {
  it('should render booking', () => {
    render(
      <BrowserRouter>
        <Booking />
      </BrowserRouter>
    );
  });
  it('should be able to pick date and time from calendar', () => {});

  it('should be able to input minimum of one character', () => {});

  it('should show error when shoes are not selected', () => {});
});
