import React, { useState, useReducer } from "react";
import BookingForm from "./BookingForm";

function BookingPage() {
    // Declare state variables
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    // handle state change for available times
    function updateTimes(state, action) {
        switch (action.type) {
            case 'update':
                // update available times based on selected date
                return state;
            default:
                return state;
        }
    }

    // initialize available times
    function initializeTimes() {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }

    return (
        <>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </>
    );
}

export default BookingPage;
