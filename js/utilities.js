function getId(id) {
    return document.getElementById(id);
}

function disableSeats() {
    for (const seat of seats) {
        if (!seat.checked) {
            seat.disabled = true;
        }
    }
}

function enableSeats() {
    for (const seat of seats) {
        seat.disabled = false;
    }
}