let blockMenu = document.querySelectorAll(".dropdown");
// Array.isArray(blockMenu);

for (key of blockMenu) {
  key.addEventListener("click", function (event) {
    let dropdownDiv = document.getElementById("dropdown_close");
    if (dropdownDiv.classList == "dropdown_close") {
      dropdownDiv.classList.remove("dropdown_close");
      dropdownDiv.classList.add("dropdown_open");
    } else if (dropdownDiv.classList == "dropdown_open") {
      dropdownDiv.classList.remove("dropdown_open");
      dropdownDiv.classList.add("dropdown_close");
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
