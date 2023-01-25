import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes } from './BookingForm';
import { fetchAPI } from './api';
import { updateTimes } from './BookingForm';

jest.mock('./api', () => ({
    fetchAPI: jest.fn(() => Promise.resolve(["10:00", "11:00", "12:00"]))
  }));

  test('initializeTimes', async () => {
    const times = await initializeTimes();
    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });


test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('updateTimes', () => {
    const date = "2022-02-02";
    const times = updateTimes(date);
    expect(times).toEqual(["18:00", "19:00", "20:00"]);
  });
