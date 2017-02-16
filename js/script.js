var link = document.querySelector(".feedback .btn-red");
var popupClose = document.querySelector(".cross");
var popup = document.querySelector(".popup-layout");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-layout-block");
});
popupClose.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-layout-block");
});
