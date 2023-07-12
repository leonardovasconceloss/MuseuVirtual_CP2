  /* Se ao modal de login */

function goToMiddle() {
  const element = document.getElementById("middle");
  element.scrollIntoView({ behavior: "smooth" });
}

window.onload = function () {
  window.onscroll = function () {
    let header = document.getElementsByClassName("header-container")[0];
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 50) {
      header.style.visibility = "hidden";
    } else {
      header.style.visibility = "visible";
    }
  };

  /* Se ao modal de login */

  let modal = document.getElementById("loginModal");

  let btn = document.getElementsByClassName("login-btn")[0];

  let span = document.getElementsByClassName("close-btn")[0];

  btn.onclick = function () {
    modal.style.display = "flex";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};


/* Se refere ao botão de login */

function onMenuButtonClick() {
  const navbar = document.getElementById("navbar");
  navbar.style.display = navbar.style.display == "block" ? "none" : "block";
}
