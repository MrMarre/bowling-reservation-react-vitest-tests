import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Booking from '../views/Booking';
import { BrowserRouter } from 'react-router-dom';

describe('Booking', () => {
  it('should render booking', () => {
    render(<Booking />);
    console.log('hej');
    screen.debug();
  });
});
