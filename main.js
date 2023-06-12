const side_menu = document.querySelector(".side-menu");
const openClose = document.querySelectorAll(".open-dash");




[...openClose].forEach(item => {

    item.addEventListener("click", function () {

        side_menu.classList.toggle("active")
    });
})
