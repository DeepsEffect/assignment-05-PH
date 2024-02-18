

const seats = document.getElementsByClassName('addSeat');
const seatCountNumber = getId('seat-count');
const maxSeats = 4;
let totalPrice = 0;

for (const seat of seats) {
    seat.addEventListener('click', function () {
        const seatCount = parseInt(seatCountNumber.innerText);

        if (this.checked) {
            if (seatCount < maxSeats) {
                seatCountNumber.innerText = seatCount + 1;
                // getting the selected seats info
                const seatContainer = getId('seat-container');
                // flex the list container
                const listContainer = document.createElement('li');
                listContainer.style.display = 'flex';
                listContainer.style.justifyContent = 'space-between';
                // create 4 new elements
                const seatName = document.createElement('p');
                const seatClass1 = document.createElement('p');
                const seatClass2 = document.createElement('p');
                const seatPrice = document.createElement('p');
                // assigning elements to their values
                const newSeat = seat.getAttribute('aria-label');
                seatName.textContent = newSeat;
                seatClass1.innerText = 'Economy';
                seatClass2.innerText = 'Economy';
                seatPrice.innerText = parseInt(550);
                // append those elements to a list
                listContainer.appendChild(seatName);
                listContainer.appendChild(seatClass1);
                listContainer.appendChild(seatClass2);
                listContainer.appendChild(seatPrice);
                seatContainer.appendChild(listContainer);
                listContainer.style.flex
                // seats left 
                getId('seats-left').innerText--;
                if (seatCount + 1 === maxSeats) {
                    disableSeats();
                    alert('You are about to reach the maximum number of purchaseable seats.');
                }

                // calculate grand total
                totalPrice += parseInt(seatPrice.innerText);
                getId('total-price').innerText = totalPrice;
            }

        } else {
            seatCountNumber.innerText = seatCount - 1;
            getId('seats-left').innerText++;
            enableSeats();
            // Remove the list container when deselect the seats.
            const seatContainer = getId('seat-container');
            const listContainer = seatContainer.lastElementChild;
            seatContainer.removeChild(listContainer);
        }
    })
}





