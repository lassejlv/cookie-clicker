const cookie = document.querySelector(".cookie");
const count = document.querySelector(".count");

cookie.addEventListener("click", () => {
  localStorage.setItem("count", parseInt(count.innerHTML) + 1);
});

count.innerHTML = localStorage.getItem("count");
