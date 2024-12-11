import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
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
  it("should render 'Ingen bokning gjord' when sessionStorage is empty on confirmation page", async () => {
    window.sessionStorage.clear();
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
    const confirmationLink = navigationLinks.find(
      (link) => link.textContent === 'Confirmation'
    );
    fireEvent.click(confirmationLink);
    expect(screen.getByText(/inga bokning gjord!/i)).toBeInTheDocument();
  });
});

//  -->  Användaren ska kunna navigera från bokningsvyn till bekräftelsevyn när bokningen är klar.
// --> Om användaren navigerar till bekräftelsevyn och ingen bokning är gjord eller finns i session storage ska texten "Ingen bokning gjord visas".
//  --> Om användaren navigerar till bekräftelsevyn och det finns en bokning sparad i session storage ska denna visas.
