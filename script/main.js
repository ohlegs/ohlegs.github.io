let blockMenu = document.querySelectorAll(".dropdown");
blockMenu = Array.from(blockMenu);

blockMenu.forEach((elem) =>{
    elem.addEventListener("click", function style(event) {
        let dropdownDiv = Array.from(event.target.childNodes);

        if (dropdownDiv[1].classList == "dropdown_close") {
            dropdownDiv[1].classList.remove("dropdown_close");
            dropdownDiv[1].classList.add("dropdown_open");
        } else if (dropdownDiv[1].classList == "dropdown_open") {
            dropdownDiv[1].classList.remove("dropdown_open");
            dropdownDiv[1].classList.add("dropdown_close");
        }
    });
});

// for (key of blockMenu) {
//   // console.log(key.children);
//   key.addEventListener("click", function style(event) {
//     let stop = event.target.querySelector(".stop");
//     if (stop != null) {
//       console.log(stop);
//       stop.removeEventListener("click", style);
//     }
//     {
//       let dropdownDiv = event.target.children;

//       if (dropdownDiv[0].classList == "dropdown_close") {
//         dropdownDiv[0].classList.remove("dropdown_close");
//         dropdownDiv[0].classList.add("dropdown_open");
//       } else if (dropdownDiv[0].classList == "dropdown_open") {
//         dropdownDiv[0].classList.remove("dropdown_open");
//         dropdownDiv[0].classList.add("dropdown_close");
//       }
//     }
//   });
// }

// removeEventListener('click',style(),true)

// if (dropdownDiv.classList == "dropdown_close") {
//     dropdownDiv.classList.remove("dropdown_close");
//     dropdownDiv.classList.add("dropdown_open");
//   } else if (dropdownDiv.classList == "dropdown_open") {
//     dropdownDiv.classList.remove("dropdown_open");
//     dropdownDiv.classList.add("dropdown_close");
//   }
