var submitBtn = document.querySelector(".button-submit");
var form =  document.querySelector(".main-filter");
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  form.submit();
  return false;
});