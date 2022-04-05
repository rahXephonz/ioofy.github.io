//menampilkan UI message + event send message
function UI() {}

//Tampilkan alert
UI.prototype.showAlert = function (message, className) {
  // Membuat element div untuk pembungkus
  const div = document.createElement("div");
  // tambahkan kelas
  div.className = `alert ${className}`;
  // tambahkan tulisan text
  div.appendChild(document.createTextNode(message));

  // Insert ke parent

  // get form
  const container = document.querySelector(".container");
  const form = document.querySelector(".formBx");
  // insert allert
  container.insertBefore(div, form);
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// button send event listener (kirim pesan)
const button = document.getElementById("button");
const input = document.getElementById("contact-form");
button.addEventListener("click", (evt) => {
  evt.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  var d = new Date(),
    minutes =
      d.getMinutes().toString().length == 1
        ? "0" + d.getMinutes()
        : d.getMinutes(),
    hours =
      d.getHours().toString().length == 1 ? "0" + d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? "pm" : "am",
    months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const ui = new UI();
  if (name === "" || (email === "") | (message === "")) {
    ui.showAlert("😩 Sorry! Do not leave the form blank!", "error");
    var targetElement = document.querySelector(".container");
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    ui.showAlert("😵 Oops! Please provide a valid email", "error");
    var targetElement = document.querySelector(".container");
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  } else if (message.length < 10) {
    ui.showAlert("🤨 Hmmm! Your message must be > 10 characters", "error");
    var targetElement = document.querySelector(".container");
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  } else if (name.length < 6 || !/^[a-zA-Z ]*$/.test(name)) {
    ui.showAlert(
      "🤣 Hei! Your name must be > 6 chars and only alphabets",
      "error"
    );
    var targetElement = document.querySelector(".container");
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  } else {
    Email.send({
      SecureToken: "4fdf9f77-b58d-47cc-826f-48dd312499f1",
      To: "yourmail@mail.com",
      From: `${email}`,
      Subject: `📧 An email from ${name}`,
      Body: `Hello Rizukyy👋, there a message from your viewers. <br> <br> 🧑🏻 A Name : ${name} <br> ✉️ A Message : <br><br> 
            ${message} <br><br> Write on ${
        days[d.getDay()] +
        ", " +
        months[d.getMonth()] +
        " " +
        d.getDate() +
        " " +
        d.getFullYear() +
        " " +
        hours +
        ":" +
        minutes +
        " " +
        ampm
      }`,
    }).then((message) => {
      document.getElementById("wait").style.display = "block";

      setTimeout(function () {
        document.getElementById("wait").style.display = "none";
        ui.showAlert(
          "👍 Thanks! Your message was successfully sent.",
          "success"
        );
        var targetElement = document.querySelector(".container");
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }, 2000);
    });

    document.getElementById("contact-form").reset();
  }
});

// menghilangkan hash semacam #
$(document).ready(function () {
  const menu = $(".nohash");

  menu.click(() => {
    setTimeout(() => {
      removeHash();
    }, 1);
  });

  function removeHash() {
    history.replaceState(
      "",
      document.title,
      window.location.origin + window.location.pathname + window.location.search
    );
  }
});

// animasi ball mengikuti mouse pointer
let animate = document.getElementsByClassName("animate");
document.onmousemove = function () {
  let x = (event.clientX * 20) / window.innerWidth + "%";
  let y = (event.clientY * 20) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    animate[i].style.left = x;
    animate[i].style.top = y;
    animate[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }
};

//jquery scrolled di kelas navbar
$(window).scroll(function () {
  $("header").toggleClass("scrolled", $(this).scrollTop() > 10);
});

// Event dark mode dengan toggle
const chk = document.getElementById("chk");
chk.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Event menampilkan element navbar di buttonnya
const showNavbar = (toggleId, navId, bodyId, headerId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId);

  // Validate that all variables exist
  if (toggle && nav && bodypd && headerpd) {
    toggle.addEventListener("click", () => {
      // show navbar
      nav.classList.toggle("show");
      // change icon
      toggle.classList.toggle("bx-x");
      // add padding to body
      bodypd.classList.toggle("body-pd");
      // add padding to header memunculkan x ke header
      headerpd.classList.toggle("body-pd");
    });
  }
};

//menampilkan semua element didalam menu navbar
showNavbar("header-toggle", "nav-bar", "body-pd", "header");

// Event scrolling
const linkColor = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset > sectionTop) {
      current = section.getAttribute("id");
    }
  });

  linkColor.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

// typed js
var typed = new Typed(".dashtext", {
  strings: ["$_Welcome Bro.", "$_Keep Healthy!"],

  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 5000,
  showCursor: false,
});

// Event animasi rubber band dan bouncing text
const elements = document.getElementsByClassName("alpha");

for (let i = 0; i <= elements.length; i++) {
  elements[i].addEventListener("animationend", function () {
    elements[i].classList.remove("animated");
  });

  elements[i].addEventListener("mouseover", function () {
    elements[i].classList.add("animated");
  });
}
