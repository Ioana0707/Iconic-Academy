const actualPage = "galaProBeauty2024";    

(function () {
  //define the constants to convert seconds into mi,hours,days
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    //date and time for the countdown event 
    const countDown = new Date('2024-05-18T09:00:00').getTime(),
        x = setInterval(function() {    
  //In setInterval, the time remaining until the event is calculated and the corresponding HTML elements are updated
          const now = new Date().getTime();
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        }, 0)
    }());



    function openWhatsApp() {
        var phoneNumber = "745604818";
        window.location.href = "whatsapp://send?phone=" + phoneNumber;
    }





let modalIndex = 1;
// Function to open the modal with an image and caption
function openModal(imgSrc, altText) {
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById('modalImg');
  var captionText = document.getElementById('caption');

  modalImg.src = imgSrc;
  modalImg.alt = altText;
  captionText.innerHTML = altText;

  modal.style.display = 'flex'; 
}
// Function to close the modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';}
  // Ensure that the modal can be closed by clicking outside the image
window.onclick = function (event) {
  var modal = document.getElementById('myModal');
  if (event.target === modal) {
    modal.style.display = 'none';}
}
//navigate to the next or previous image in the modal
function plusSlides(n) {
  showSlides(modalIndex += n);
}

function currentSlide(n) {
  showSlides(modalIndex = n);
}
// display the slides (images) in the modal
function showSlides(n) {
  var modalImg = document.getElementById('modalImg');
  var captionText = document.getElementById('caption');

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) { modalIndex = 1; }// If index exceeds total slides, reset to first slide
  if (n < 1) { modalIndex = slides.length; } // If index is less than 1, set to last slide

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
 // Display the current slide
  modalImg.src = slides[modalIndex - 1].getElementsByTagName('img')[0].src;
  modalImg.alt = slides[modalIndex - 1].getElementsByTagName('img')[0].alt;
  captionText.innerHTML = slides[modalIndex - 1].getElementsByTagName('img')[0].alt;
// Add "active" class to the corresponding dot
  dots[modalIndex - 1].className += " active";
  slides[modalIndex - 1].style.display = "block";
}
// Execute when the window loads
window.onload = function () {
  showSlides(modalIndex);
   //Sets the interval to change images every 5 seconds 
   setInterval(function () {
    plusSlides(1); // Call plusSlides to move to the next slide
  }, 5000);
};