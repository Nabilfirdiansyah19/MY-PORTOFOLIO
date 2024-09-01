const span = document.querySelector(".span");
const ol = document.querySelector(".ol");

span.addEventListener("click", function () {
  ol.classList.toggle("max-[768px]:hidden");
});
