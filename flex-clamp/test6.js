document.addEventListener("DOMContentLoaded", function () {

  const cliker = document.querySelector(".click-me");
  const obeji01 = document.querySelector("pop-up1");

  cliker.addEventListener("click", function() {
    if (obeji01) {
    obeji01.classList.toggle('active')
  }
})

})