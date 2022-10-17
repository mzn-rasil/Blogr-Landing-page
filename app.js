const mobileMenuListItems = document.querySelector(".mobileMenu");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const mobileNav = document.querySelector(".mobileNav");

function openListHandler(event) {
    console.log(event);
    if (event.target.nodeName === "LI") {
        event.target.children[1].classList.toggle("hidden");
        event.target.children[0].children[0].children[0].classList.toggle("rotate-180");
    } else if (event.target.nodeName === "DIV") {
        event.target.nextElementSibling.classList.toggle("hidden");
        event.target.children[0].children[0].classList.toggle("rotate-180");
    } else if (event.target.nodeName === "SPAN") {
        event.target.parentOffset.nextElementSibling.classList.toggle("hidden");
        event.target.children[0].classList.toggle("rotate-180");
    }
}

function openMenuHandler(event) {
    event.target.parentNode.children[0].classList.toggle("hidden");
    event.target.parentNode.children[1].classList.toggle("hidden");

    mobileNav.classList.toggle("hidden");
}

// Registered events
mobileMenuListItems.addEventListener("click", openListHandler);
hamburgerMenu.addEventListener("click", openMenuHandler);
