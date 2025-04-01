let btnMenu = document.querySelector("#btn-menu")
let menuMobile = document.querySelector("#menu-mobile")
let overlay = document.querySelector("#ovarlay-menu")

btnMenu.addEventListener("click", () => {
  menuMobile.classList.add("abrir-menu")
})

menuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu")
})

overlay.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu")
})

console.log(menuMobile)
