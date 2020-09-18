let elem = document.querySelectorAll(".input");
let valid = [];
for (let i = 0; i < elem.length; i++) {
   elem[i].addEventListener("input", function (event) {
      valid[i] = elem[i].validity.valid;
      if (valid[0] && valid[1]) {
         document.querySelector(".button").classList.add("button_on");
         document.querySelector(".button").style.color = "#fff";
      } else {
         document.querySelector(".button").classList.remove("button_on");
         document.querySelector(".button").style.color = "#666b6c";
      }
   }, false);
}
