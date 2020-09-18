
for (let i = 0, length = document.getElementsByClassName("input").length; i < length; i++) {
   document.getElementsByClassName("input")[i].onfocus = function() {
      for (let i = 0, length = document.getElementsByClassName("input").length; i < length; i++) {
         document.getElementsByClassName("input")[i].classList.add("input_error");
      }
   }
}

let elem = document.querySelectorAll(".input");
let select = document.querySelectorAll("select");
let date = document.querySelector("#r-date-birth");
let valid = [];
date.addEventListener("input", function (event) {
   if (date.validity.valid) {
      date.style.color = "#272A2F";
   }
}, false);
for (let i = 0; i < elem.length; i++) {
   elem[i].addEventListener("input", function (event) {
      valid[i] = elem[i].validity.valid;
      for (j = 0; j < select.length; j++) {
         if ((elem[i] === select[j])&&(valid[i])) {
            select[j].style.color = "#272A2F";
         }
      }
      if (valid[0] && valid[1] && valid[2] && valid[3] && valid[4] &&
          valid[5] && valid[6] && valid[7] && valid[8] && valid[9]) {
         document.querySelector(".button").classList.add("button_on");
      } else {
         document.querySelector(".button").classList.remove("button_on");
      }
   }, false);
}



