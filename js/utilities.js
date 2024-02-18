//* scrolling into the 'select your ticket section' 
function buyTickets() {
    getId('select-seat').scrollIntoView({ behavior: 'smooth' });
}

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


// hudai ekta alert lol
function driver() {
    alert('can\'t seat in the drivers position bro');
}