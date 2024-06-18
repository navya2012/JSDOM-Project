
// JavaScript to toggle image visibility
const menuClose = document.querySelector(".menu-icon-cross")
const navbar = document.querySelector(".main-navbar")
const navbarFlex = document.querySelector(".navbar-images")

menuClose.addEventListener("click",()=>{
    console.log("menu close button")

    navbar.style.display = "none"
    navbarFlex.style.display = "block"

})

const menuIconLines= document.querySelector(".menu-icon")
menuIconLines.classList.toggle("toggle")

menuIconLines.addEventListener("click",()=>{
    console.log("menu close button")

    navbar.style.display = "block"
    navbarFlex.style.display = "none"
})


const menuItem1 = document.querySelector("#nav-menu1")
const menuItem2 = document.querySelector("#nav-menu2")
const menuItem3 = document.querySelector("#nav-menu3")

const imagesMenu = document.querySelector('.navbar-images');
 imagesMenu.style.display = "none";

const menuImage1 = document.querySelector("#image1")
menuImage1.style.display = "block"

const menuImage2 = document.querySelector("#image2")
menuImage2.style.display = "none"

const menuImage3 = document.querySelector("#image3")
menuImage3.style.display = "none"

menuItem1.onclick = function () {
    showImage('image1');
    console.log('sssssssssss')
};
menuItem2.onclick = function () {
    showImage('image2');
};
menuItem3.onclick = function () {
    showImage('image3');
};

function showImage(imageId) {
    // Hide all images
    var images = document.getElementsByClassName('flex-image');
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    // Show the selected image
    document.getElementById(imageId).style.display = 'block';
}


// chrome button - model popup
const chromeButton = document.querySelector(".model-button")
const closeButton = document.querySelector(".close")
const modelButton = document.querySelector(".model-close")
const modelContainer = document.querySelector(".model-container")


chromeButton.addEventListener("click", () => {
    modelContainer.style.display = "block";
})

closeButton.addEventListener('click', () => {
    modelContainer.style.display = 'none';
})

modelButton.addEventListener("click", () => {
    modelContainer.style.display = 'none';
})


