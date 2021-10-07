const btnIT = document.querySelector(".it");
const btnDesign = document.querySelector(".design");
const btnMiddle = document.querySelector(".middle-btn");
const btnClose = document.querySelector(".close-btn");
const design = document.querySelector(".bright");
const it = document.querySelector(".dark");
const menu = document.querySelector(".meniu-background");

btnDesign.addEventListener("click", () => {
    it.style.width = "0%";
    design.style.width = "100%";
})
btnIT.addEventListener("click", () => {
    it.style.width = "100%";
    design.style.width = "0%";
})
btnMiddle.addEventListener("click", () => {
    menu.style.display = "inline-block";
    btnMiddle.style.display = "none";
    btnClose.style.display = "inline-block"
})
btnClose.addEventListener("click", () => {
    btnMiddle.style.display = "inline-block";
    btnClose.style.display = "none";
    menu.style.display = "none";
})