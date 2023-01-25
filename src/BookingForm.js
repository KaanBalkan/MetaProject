import React, { useState } from "react";

function BookingForm({ availableTimes: initialAvailableTimes, dispatch }) {
    // Declare state variables for form fields
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [availableTimes, setAvailableTimes] = useState([]);

    // handle form submit event
    const handleSubmit = event => {
        event.preventDefault();
        // do something with the form data
    };

    // handle change of date form field
    const handleDateChange = event => {
        setDate(event.target.value);
        let newAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        if (event.target.value === '2023-02-02') {
            newAvailableTimes = ["18:00", "19:00", "20:00"];
        }
        setAvailableTimes(newAvailableTimes);
    };



    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange} />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={event => setTime(event.target.value)}>
                {availableTimes && availableTimes.map((timeOption, index) => (
                <option key={index} value={timeOption}>{timeOption}</option> ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={event => setGuests(event.target.value)}/>

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={event => setOccasion(event.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Business</option>
            </select>
            <input type="submit" value="Book Now" />
        </form>

    );
}



export function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}
export function updateTimes(state, action) {
    switch(action) {
        case 'update':
            return action.payload.availableTimes;
        default:
            return state.availableTimes;
    }
}



export default BookingForm;
