var modal = document.getElementById("myModal");
var btn = document.getElementByClass("signup");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// Close modal with X
span.onclick = function() {
  modal.style.display = "none";
}

// Close modal when click outside
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
