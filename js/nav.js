window.onscroll = function() {scrollFunction(); scrollFunctionTop()};
function scrollFunction() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  document.getElementById("bagg").style.background = "#E3D3CD";
} else {
  document.getElementById("bagg").style.background = "none";
}
}

let mybutton = document.getElementById("toppen");


function scrollFunctionTop() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
