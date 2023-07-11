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

  let modal = document.getElementById("loginModal");

  let btn = document.getElementsByClassName("login-btn")[0];

  let span = document.getElementsByClassName("close-btn")[0];

  btn.onclick = function () {
    modal.style.display = "block";
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
