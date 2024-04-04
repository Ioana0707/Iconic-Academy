const actualPage = "despreMine";

$(document).ready(function () {
  $("#animated-image").css("top", "100px");
});

$(document).ready(function () {
  $(".text-container").css("left", "50%");
});

function toggleFullscreen(img) {
  if (!img.classList.contains("fullscreen")) {
    // Dacă imaginea nu este în fullscreen, o plasăm în fullscreen
    img.classList.add("fullscreen");
  } else {
    // Dacă imaginea este deja în fullscreen, o scoatem din fullscreen
    img.classList.remove("fullscreen");
  }
}

// Funcție pentru a verifica dacă elementul este în vizualizare
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Funcție pentru a actualiza cifrele
function updateCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    // Verificăm dacă elementul este în vizualizare
    if (isInViewport(counter)) {
      const target = +counter.getAttribute("data-target");
      let count = 0;

      // Funcția pentru actualizarea progresivă a cifrelor
      const update = () => {
        const increment = target / 100; // Determinăm un increment mic pentru a face animația
        if (count < target) {
          count += increment;
          counter.textContent = "+" + Math.ceil(count); // Adăugăm plusul în fața cifrei
          requestAnimationFrame(update); // Continuăm actualizarea până când ajungem la țintă sau ieșim din vizualizare
        } else {
          counter.textContent = "+" + target; // Setăm valoarea finală dacă depășim ținta
        }
      };

      update(); // Inițiem actualizarea
    }
  });
}

// Verificăm în mod continuu când elementele sunt în vizualizare la derulare
window.addEventListener("scroll", updateCounters);
window.addEventListener("resize", updateCounters);

// Inițializăm verificarea la încărcarea paginii
updateCounters();

//event that waits until the entire HTML document is loaded and parsed.
document.addEventListener("DOMContentLoaded", function () {
  //start a variable to track the current img index
  let currentIndex = 0;
  const images = document.querySelectorAll(".image-container img");
  const totalImages = images.length;

  //receives an index and displays only the corresponding image, hiding the others
  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  }

  //selected the next and prev buttons and added events to call the corresponding functions on click
  const nxtBtn = document.querySelector(".nxt-btn");
  const preBtn = document.querySelector(".pre-btn");

  nxtBtn.addEventListener("click", nextImage);
  preBtn.addEventListener("click", prevImage);

  // The initial call to display only the first image
  showImage(currentIndex);

  setInterval(nextImage, 5000);
});

function openWhatsApp() {
  var phoneNumber = "745604818";
  window.location.href = "whatsapp://send?phone=" + phoneNumber;
}
