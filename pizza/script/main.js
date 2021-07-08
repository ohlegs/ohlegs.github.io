let blockMenu = document.querySelectorAll(".dropdown");
// Array.isArray(blockMenu);

for (key of blockMenu) {
  // console.log(key.children);
  key.addEventListener("click", function (event) {
    let dropdownDiv = event.target.children;
      
    if (dropdownDiv[0].classList == "dropdown_close") {
        dropdownDiv[0].classList.remove("dropdown_close");
        dropdownDiv[0].classList.add("dropdown_open");
      } else if (dropdownDiv[0].classList == "dropdown_open") {
        dropdownDiv[0].classList.remove("dropdown_open");
        dropdownDiv[0].classList.add("dropdown_close");
      }
  });
}

// if (dropdownDiv.classList == "dropdown_close") {
//     dropdownDiv.classList.remove("dropdown_close");
//     dropdownDiv.classList.add("dropdown_open");
//   } else if (dropdownDiv.classList == "dropdown_open") {
//     dropdownDiv.classList.remove("dropdown_open");
//     dropdownDiv.classList.add("dropdown_close");
//   }
