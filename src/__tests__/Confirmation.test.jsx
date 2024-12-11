import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Confirmation from '../views/Confirmation';
import Booking from '../views/Booking';

describe('Confirmation', () => {
  it("should navigate to confirmation and render 'Ingen bokning gjord!'", () => {
    render(
      <MemoryRouter>
        <Confirmation />
      </MemoryRouter>
    );
    expect(screen.getByText(/inga bokning gjord/i)).toBeInTheDocument();
  });
  it('should render "See you soon" when sessionStorage contains order, when navigating to confirmation page', async () => {
    sessionStorage.setItem(
      'confirmation',
      JSON.stringify({
        when: '2024-12-10T13:00',
        people: 1,
        lanes: 1,
        price: 220,
        id: 'STR1070STFU',
      })
    );

    render(
      <MemoryRouter>
        <Confirmation />
      </MemoryRouter>
    );

    expect(screen.getByText(/see you soon!/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/when/i)).toHaveValue('2024-12-10 13:00');
    expect(screen.getByLabelText(/who/i)).toHaveValue('1');
    expect(screen.getByLabelText(/lanes/i)).toHaveValue('1');
    expect(screen.getByLabelText(/booking number/i)).toHaveValue('STR1070STFU');

    expect(screen.getByText('220 sek')).toBeInTheDocument();
    expect(screen.getByText(/see you soon/i)).toBeInTheDocument();
  });
  it('should render booking and confirmation details when it is stored in sessionStorage', () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );
    const dateInput = screen.getByLabelText(/date/i);
    const timeInput = screen.getByLabelText(/time/i);
    const peopleInput = screen.getByLabelText(/number of awesome bowlers/i);
    const lanesInput = screen.getByLabelText(/number of lanes/i);
    const submitBtn = screen.getByText(/strIIIIIike!/i);
    const addShoeBtn = screen.getByText('+');

    fireEvent.change(dateInput, { target: { value: '2024-12-10' } });
    fireEvent.change(timeInput, { target: { value: '13:00' } });
    fireEvent.change(peopleInput, { target: { value: '1' } });
    fireEvent.change(lanesInput, { target: { value: '1' } });

    const numberOfPeople = parseInt(peopleInput.value, 10);

    for (let i = 0; i < numberOfPeople; i++) {
      fireEvent.click(addShoeBtn);
    }
    let inputShoeSize = screen.getAllByLabelText(/Shoe size \/ person /);
    for (let i = 0; i < numberOfPeople; i++) {
      fireEvent.change(inputShoeSize[i], { target: { value: '35' } });
    }
    fireEvent.click(submitBtn);

    render(
      <MemoryRouter>
        <Confirmation />
      </MemoryRouter>
    );
    expect(dateInput.value).toBe('2024-12-10');
    expect(timeInput.value).toBe('13:00');
    expect(peopleInput.value).toBe('1');
    expect(lanesInput.value).toBe('1');
    inputShoeSize.forEach((input) => {
      expect(input.value).toBe('35');
    });
  });
});
