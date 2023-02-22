const menu = document.querySelector(".menubtn");
const navList = document.querySelector(".openmenu");

menu.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menu.innerHTML = "menu";
    navList.classList.toggle("close");
  } else {
    menu.classList.add("active");
    menu.innerHTML = "close";
    navList.classList.toggle("close");
  }
});
