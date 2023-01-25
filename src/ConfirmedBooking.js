import React from "react";
import { useNavigate } from "@reach/router";

function ConfirmedBooking() {
    return (
        <>
            <h1>Booking Confirmed</h1>
            <p>Thank you for your booking, we are looking forward to seeing you!</p>
        </>
    );
}

function Main() {
    const navigate = useNavigate();

    function submitForm(formData) {
        submitAPI(formData)
            .then(response => {
                if (response) {
                    navigate("/booking-confirmed");
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <>
            <BookingForm submitForm={submitForm} />
        </>
    );
}

export default ConfirmedBooking;
