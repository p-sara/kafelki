/*var left = document.getElementById("left");
var right = document.getElementById("right");*/
var cross = document.querySelectorAll("#cross");
var tile = document.querySelectorAll("#tile");

for (var i=0; i<tile.length;i++){
function menu() {
  var left = this.previousElementSibling;
  var right = this.nextElementSibling
  left.classList.remove("hidden");
  left.classList.remove("fadeOutUpBig");
  left.classList.add("fadeInDownBig");
  right.classList.remove("hidden");
  right.classList.add("fadeInUpBig");
  right.classList.remove("fadeOutDownBig");
};

tile[i].addEventListener("click", menu);
  
for (var j = 0; j < cross.length; j++) {
  function close() {
    var right = this.parentElement;
    var left = right.previousElementSibling.previousElementSibling;
    left.classList.add("fadeOutUpBig");
    left.classList.remove("fadeInDownBig");
    right.classList.add("fadeOutDownBig");
    right.classList.remove("fadeInUpBig");
  };
  cross[j].addEventListener("click", close);
}
};
