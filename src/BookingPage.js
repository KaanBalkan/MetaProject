import React, { useState, useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchData } from "./api";

function BookingPage() {
    // Declare state variables
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

// handle state change for available times
function updateTimes(state, action) {
    switch (action.type) {
        case 'update':
            // update available times based on selected date
            const selectedDate = action.payload;
            const data = fetchData(selectedDate);
            return data.availableTimes;
        default:
            return state;
    }
}

// initialize available times
function initializeTimes() {
    const today = new Date();
    const data = fetchData(today);
    return data.availableTimes;
}

return (
    <>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
);
}

export default BookingPage;
