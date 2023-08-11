const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  // show side menu
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  //close side menu
  sideMenu.style.display = "none";
});
