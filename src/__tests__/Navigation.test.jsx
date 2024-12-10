import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it } from 'vitest';
import Booking from '../views/Booking';
import Confirmation from '../views/Confirmation';
import Navigation from '../components/Navigation/Navigation';

describe('Navigation', () => {
  it('should navigate to <Booking /> when link for booking is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </MemoryRouter>
    );

    const images = screen.getAllByRole('img');
    const navIcon = images.find((img) =>
      img.classList.contains('navigation__icon')
    );

    fireEvent.click(navIcon);
    const navigationLinks = await screen.findAllByRole('link');
    const bookingLink = navigationLinks.find(
      (link) => link.textContent === 'Booking'
    );
    fireEvent.click(bookingLink);
    expect(screen.getByText(/when, what & who/i)).toBeInTheDocument();
  });
});
