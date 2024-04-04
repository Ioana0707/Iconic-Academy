const actualPage = "homePage";

// create a fixed date for the counter
const countToDate = new Date("2024-05-18T09:00:00").getTime();
//create intervalus for updating the display
let previousTimeBetweenDates;
setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
  //the flip cards function is called with the remaining time to update the cards
  flipAllCards(timeBetweenDates);

  previousTimeBetweenDates = timeBetweenDates;
}, 250);
//the function receives the remaining time and calls the flip function for each visual part
function flipAllCards(time) {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600) % 24;
  const days = Math.floor(time / (3600 * 24));

  flip(
    document.querySelector("[data-days-tens]"),
    Math.floor((days % 100) / 10)
  );
  flip(document.querySelector("[data-days-ones]"), days % 10);

  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
  flip(document.querySelector("[data-hours-ones]"), hours % 10);

  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10));
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10);

  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
}

// the flip function receives a card (a visual component) and a new number. Creates a flip animation between the old and new value, thus visually updating the displayed value.

function flip(flipCard, newNumber) {
  //get the element inside the card that will be animated
  const topHalf = flipCard.querySelector(".top");

  //get the current number from the upper part of the card and convert it to an integer with parseInt
  const startNumber = parseInt(topHalf.textContent);

  //check if the new number is equal to the current value; if so, do nothing and exit.
  if (newNumber === startNumber) return;

  const bottomHalf = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  //set the text wave for the four created elements. At first they are equal to the current value (to initiate the animation).
  topHalf.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  //When the animation starts, the text value at the top of the card is updated with the new number.
  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });
  //After the animation is finished, the element created for the top of the card is removed.
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });

  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });
  flipCard.append(topFlip, bottomFlip);
}

function openWhatsApp() {
  let phoneNumber = "745604818";
  window.location.href = "whatsapp://send?phone=" + phoneNumber;
}
