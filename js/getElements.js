/*---------------------------------Navbar Area--------------------------------------*/

//Get the Navbar Component and replace it with the placeholder
$.get("components/navbar.html", function (data) {
  $("#navbar-placeholder").replaceWith(data);
  setActiveNavbarElement();
});

$.get("js/navbar.js", function (data) {
  $("#navbar-placeholder").append(data);
});

/*
This function will add the 'active' class to the coresponding NavBar Element depending on actualPage value. 
*/
function setActiveNavbarElement() {
  switch (actualPage) {
    case "homePage":
      document.getElementById("navbar-acasa").setAttribute("class", "active");
      break;
    case "despreMinePage":
      document
        .getElementById("navbar-despreMine")
        .setAttribute("class", "active");
      break;
    case "galaProBeauty2024Page":
      document
        .getElementById("navbar-galaProBeauty2024")
        .setAttribute("class", "active");
      break;
    case "regulamentPage":
      document
        .getElementById("navbar-regulament")
        .setAttribute("class", "active");
      break;
    case "categoriiPage":
      document
        .getElementById("navbar-categorii")
        .setAttribute("class", "active");
      break;
    case "biletePage":
      document.getElementById("navbar-bilete").setAttribute("class", "active");
      break;
    case "contactPage":
      document.getElementById("navbar-contact").setAttribute("class", "active");
      break;
    case "contactPage":
      document
        .getElementById("navbar-conditiiPage")
        .setAttribute("class", "active");
      break;
    case "contactPage":
      document
        .getElementById("navbar-politicaPage")
        .setAttribute("class", "active");
      break;
    default:
      break;
  }
}

// Scroll Button
let scrollButton;
//Get the Scroll Button Component and replace it with the placeholder
$.get("/components/scrollButton.html", function (data) {
  $("#scrollButton-placeholder").replaceWith(data);
  scrollButton = document.getElementById("scrollButton");
});

//When the scrolling event is trigger, display the Scroll Button
window.onscroll = function () {
  displayScrollButton();
};

//If value of the scrollTop parameter is bigger than 20px, display the scroll button, if it's less, hide it.
function displayScrollButton() {
  if (document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

//This function is called by the scrollButton, it will reset the webpage scroll
function goToTop() {
  // document.documentElement returns the html element , and scrollTop is the value in pixels of the scrolled content
  document.documentElement.scrollTop = 0;
}

/*--------------------------------Footer Area--------------------------------------*/

//Get the Footer Component and replace it with the placeholder
$.get("components/footer.html", function (data) {
  $("#footer-placeholder").replaceWith(data);
});

// floatingWhatsapp
$.get("components/floatingWhatsapp.html", function (data) {
  $("#floatingButton-placeholder").replaceWith(data);
});

// create a new HTML link element
let link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = "images/logoIc.png?v=2";

// remove any existing favicon
var existingLink = document.querySelector('link[rel="icon"]');
if (existingLink) {
  document.head.removeChild(existingLink);
}

// add the new favicon
document.head.appendChild(link);
