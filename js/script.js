//* scrolling into the 'select your ticket section' 
function buyTickets() {
    getId('select-seat').scrollIntoView({ behavior: 'smooth' });
}

const seats = document.getElementsByClassName('addSeat');
const seatCountNumber = getId('seat-count');
const maxSeats = 4;

for (const seat of seats) {
    seat.addEventListener('click', function () {
        const seatCount = parseInt(seatCountNumber.innerText);

        if (this.checked) {
            if (seatCount < maxSeats) {
                seatCountNumber.innerText = seatCount + 1;
                if (seatCount + 1 === maxSeats) {
                    disableSeats();
                    alert('You are about to reach the maximum number of seats.');
                }
            }
        } else {
            seatCountNumber.innerText = seatCount - 1;
            enableSeats();

        }
    })
}





// hudai ekta alert lol
function driver() {
    alert('can\'t seat in the drivers position bro');
}