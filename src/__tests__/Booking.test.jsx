import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Booking from '../views/Booking';
import { BrowserRouter } from 'react-router-dom';

describe('Booking', () => {
  it('should render <Booking />', () => {
    render(
      <BrowserRouter>
        <Booking />
      </BrowserRouter>
    );
    expect(screen.getByText(/when, what & who/i)).toBeInTheDocument();
    // CHECK
  });
  it('should show error if not all required fields are filled in', () => {
    render(
      <BrowserRouter>
        <Booking />
      </BrowserRouter>
    );

    const dateInput = screen.getByLabelText(/date/i);
    const timeInput = screen.getByLabelText(/time/i);
    const peopleInput = screen.getByLabelText(/number of awesome bowlers/i);
    const lanesInput = screen.getByLabelText(/number of lanes/i);

    fireEvent.change(dateInput, { target: { value: '2024-12-10' } });
    fireEvent.change(timeInput, { target: { value: '13:00' } });
    expect(timeInput.value).toBe('13:00');
    fireEvent.change(peopleInput, { target: { value: '3' } });

    const submitBtn = screen.getByText(/strIIIIIike!/i);
    fireEvent.click(submitBtn);

    const errMessage = screen.getByText(/alla fälten måste vara ifyllda/i);
    expect(errMessage).toBeInTheDocument();
  });

  it('should show error when number of shoes does not match the number of participants', () => {});

  it('should show an error if more than 4 players are assigned to one lane', () => {
    // render(
    //   <BrowserRouter>
    //     <Booking />
    //   </BrowserRouter>
    // );
    // const peopleInput = screen.getByLabelText(/number of awesome bowlers/i);
    // const lanesInput = screen.getByLabelText(/number of lanes/i);
    // fireEvent.change(peopleInput, { target: { value: '5' } });
    // fireEvent.change(lanesInput, { target: { value: '1' } });
    // const submitBtn = screen.getByText(/strIIIIIike!/i);
    // fireEvent.click(submitBtn);
    // const errMessage = screen.getByText(
    //   /det får max vara 4 spelare per bana./i
    // );
    // // !här fattar den inte texten
    // expect(errMessage).toBeInTheDocument();
    // screen.debug();
  });
});
