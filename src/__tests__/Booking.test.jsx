import { beforeEach, describe, expect, it } from 'vitest';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import Booking from '../views/Booking';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('Booking', () => {
  let dateInput, timeInput, peopleInput, lanesInput, submitBtn, addShoeBtn;

  beforeEach(() => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );
    dateInput = screen.getByLabelText(/date/i);
    timeInput = screen.getByLabelText(/time/i);
    peopleInput = screen.getByLabelText(/number of awesome bowlers/i);
    lanesInput = screen.getByLabelText(/number of lanes/i);
    submitBtn = screen.getByText(/strIIIIIike!/i);
    addShoeBtn = screen.getByText('+');
  });

  it('should render <Booking />', () => {
    expect(screen.getByText(/when, what & who/i)).toBeInTheDocument();
  });
  it('should show error if not all required fields are filled in', async () => {
    await act(async () => {
      fireEvent.click(submitBtn);
    });
    await waitFor(() => {
      expect(
        screen.getByText(/alla fälten måste vara ifyllda/i)
      ).toBeInTheDocument();
    });
  });

  it('should show an error when number of shoes does not match number of participants', async () => {
    fireEvent.change(dateInput, { target: { value: '2024-12-10' } });
    fireEvent.change(timeInput, { target: { value: '13:00' } });

    fireEvent.change(peopleInput, { target: { value: '3' } });
    fireEvent.change(lanesInput, { target: { value: 1 } });

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(
        screen.getByText(/antalet skor måste stämma överens med antal spelare/i)
      ).toBeInTheDocument();
    });
  });

  it('should show error when shoe size is not defined for all shoe bookings', async () => {
    fireEvent.change(dateInput, { target: { value: '2024-12-10' } });
    fireEvent.change(timeInput, { target: { value: '13:00' } });

    fireEvent.change(peopleInput, { target: { value: '3' } });
    fireEvent.change(lanesInput, { target: { value: '1' } });

    const numberOfPeople = parseInt(peopleInput.value, 10);

    for (let i = 0; i < numberOfPeople; i++) {
      fireEvent.click(addShoeBtn);
    }
    let inputShoeSize = screen.getAllByLabelText(/Shoe size \/ person /);
    for (let i = 0; i < 2; i++) {
      fireEvent.change(inputShoeSize[i], { target: { value: '42' } });
    }
    await waitFor(() => {
      fireEvent.click(submitBtn);
    });
    await waitFor(() => {
      expect(
        screen.getByText(/alla skor måste vara ifyllda/i)
      ).toBeInTheDocument();
    });
  });

  it('should show an error if more than 4 players are assigned to one lane', async () => {
    fireEvent.change(dateInput, { target: { value: '2024-12-10' } });
    fireEvent.change(timeInput, { target: { value: '13:00' } });
    fireEvent.change(peopleInput, { target: { value: '5' } });
    fireEvent.change(lanesInput, { target: { value: '1' } });
    const numberOfPeople = parseInt(peopleInput.value, 10);
    for (let i = 0; i < numberOfPeople; i++) {
      fireEvent.click(addShoeBtn);
    }
    let inputShoeSize = screen.getAllByLabelText(/Shoe size \/ person /);
    for (let i = 0; i < numberOfPeople; i++) {
      fireEvent.change(inputShoeSize[i], { target: { value: '42' } });
    }
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(
        screen.getByText(/det får max vara 4 spelare per bana/i)
      ).toBeInTheDocument();
    });
  });
  it('should allow players to re-choose shoe sizes', () => {
    fireEvent.change(dateInput, { target: { value: '2024-12-10' } });
    fireEvent.change(timeInput, { target: { value: '13:00' } });
    fireEvent.change(peopleInput, { target: { value: '1' } });
    fireEvent.change(lanesInput, { target: { value: '1' } });

    for (let i = 0; i < 1; i++) {
      fireEvent.click(addShoeBtn);
      let inputShoeSize = screen.getByLabelText(/Shoe size \/ person /i);
      fireEvent.change(inputShoeSize, { target: { value: '38' } });
      expect(inputShoeSize.value).toBe('38');
      fireEvent.change(inputShoeSize, { target: { value: '39' } });
      expect(inputShoeSize.value).toBe('39');
    }
  });
  it("should be able to delete remove miss-clicked 'add-shoe'-button ", async () => {
    fireEvent.change(dateInput, { target: { value: '2024-12-10' } });
    fireEvent.change(timeInput, { target: { value: '13:00' } });
    fireEvent.change(peopleInput, { target: { value: '3' } });
    fireEvent.change(lanesInput, { target: { value: '1' } });

    const numberOfPeople = parseInt(peopleInput.value, 10);

    for (let i = 0; i < numberOfPeople; i++) {
      fireEvent.click(addShoeBtn);
    }
    let inputShoeSize = screen.getAllByLabelText(/Shoe size \/ person /i);

    for (let i = 0; i < numberOfPeople; i++) {
      fireEvent.change(inputShoeSize[i], { target: { value: '42' } });
    }
    const removeShoeButtons = screen.getAllByText('-');
    fireEvent.click(addShoeBtn);

    const updatedRemoveShoeButtons = screen.getAllByText('-');
    if (updatedRemoveShoeButtons.length > 3) {
      fireEvent.click(updatedRemoveShoeButtons[3]);
    }

    expect(screen.getAllByText('-').length).toBe(3);
  });

  it('should be able to do a complete booking', async () => {
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(peopleInput).toBeInTheDocument();
    expect(lanesInput).toBeInTheDocument();

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
    await waitFor(() => {
      fireEvent.click(submitBtn);
    });
    expect(dateInput.value).toBe('2024-12-10');
    expect(timeInput.value).toBe('13:00');
    expect(peopleInput.value).toBe('1');
    expect(lanesInput.value).toBe('1');
    inputShoeSize.forEach((input) => {
      expect(input.value).toBe('35');
    });

    // ! Du kanske skall passa på att rendera view-confirmation här!?
  });
});
