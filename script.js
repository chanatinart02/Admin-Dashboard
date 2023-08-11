const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  // show side menu
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  //close side menu
  sideMenu.style.display = "none";
});

// Change theme color
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables"); //change color on body

  // themeToggler switching
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// Fill orders data in table
orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `<td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.payment}</td>
                <td class="${order.statusColor}">${order.status}</td>
                <td class="primary">Details</td>`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
