const menu = document.querySelector(".menubtn");
const navList = document.querySelector(".openmenu");

menu.addEventListener("click", () => {
  if (!navList.classList.contains("close")) {
    menu.innerHTML = "menu";
    navList.classList.toggle("close");
  } else {
    menu.innerHTML = "close";
    navList.classList.toggle("close");
  }
});

window.addEventListener("click", (e) => {
  if (!(e.target === menu || e.target === navList)) {
    if (!navList.classList.contains("close")) {
      navList.classList.toggle("close");
      menu.innerHTML = "menu";
    }
  }
});
