const nameI = document.querySelector(".input-name")
const genderI = document.getElementById("input-gender")
const ageI = document.getElementById("input-age")
const nationalityI = document.getElementById("input-nationality")

const nameP = document.querySelector(".name")
const genderP = document.getElementById("gender")
const ageP = document.getElementById("age")
const nationalityP = document.getElementById("nationality")

let submitBtn = document.querySelector(".submit-btn")

submitBtn.addEventListener("click", function () {
  nameP.textContent = ""
  nameP.textContent = nameI.value
})

