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
                listContainer.style.paddingLeft = '30px';
                listContainer.style.paddingRight = '30px';

                // create 4 new elements
                const seatName = document.createElement('p');
                const seatClass = document.createElement('p');
                const seatPrice = document.createElement('p');
                // assigning elements to their values
                const newSeat = seat.getAttribute('aria-label');
                seatName.textContent = newSeat;
                seatClass.innerText = 'Economy';
                seatPrice.innerText = parseInt(550);
                // append those elements to a list
                listContainer.appendChild(seatName);
                listContainer.appendChild(seatClass);
                listContainer.appendChild(seatPrice);
                seatContainer.appendChild(listContainer);
                listContainer.style.flex
                // seats left 
                getId('seats-left').innerText--;
                if (seatCount + 1 === maxSeats) {
                    disableSeats();
                    // alert('You are about to reach the maximum number of purchaseable seats.');
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
            // subtract the total price when deselect
            const deselectedPrice = parseInt(listContainer.querySelector('p:last-child').innerText);
            totalPrice -= deselectedPrice;
            getId('total-price').innerText = totalPrice;

        }
    })
}

// Apply coupon discount 
const couponInput = getId('coupon-input');
const applyCouponButton = getId('apply-coupon');
const grandTotalSection = getId('grand-total');

applyCouponButton.addEventListener('click', function () {
    const couponCode = couponInput.value;
    let discount = 0;
    if (couponCode === "NEW15") {
        discount = totalPrice * 0.15; // 15% discount
        getId('coupon-container').classList.add('hidden');
    } else if (couponCode === "Couple 20") {
        discount = totalPrice * 0.20; // 20% discount
        getId('coupon-container').classList.add('hidden');
    }
    else {
        alert('Invalid Coupon')
    }
    const discountedTotal = totalPrice - discount;
    grandTotalSection.innerText = discountedTotal;
})

// Passenger input section (if the phone number is filled and at least one seat is selected the next button appears)
const nextButton = getId('next-btn');
const phoneNumber = getId('input-phone');
nextButton.disabled = true;

function nextButtonConditions() {
    const phoneNumberfilled = phoneNumber.value.trim().length > 0;
    let seatSelected = false;
    // checking if the seat is  selected or not
    for (const seat of seats) {
        if (seat.checked) {
            seatSelected = true;
            break;
        }
    }

    if (phoneNumberfilled && seatSelected) {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
}
// event listener for phone number input and seat selection
phoneNumber.addEventListener('input', nextButtonConditions);
for (const seat of seats) {
    seat.addEventListener('click', nextButtonConditions);
}

// showing the modal when clicked next button
const myModal = getId('my_modal_1');
nextButton.addEventListener('click', function () {
    myModal.showModal();
});
