const sectionList = document.getElementById("sectionList");
const sectionMenu = document.getElementById("sectionMenu");
// MENU POINTS
const firstMenuPoint = document.getElementById("firstMenuPoint");
const secondMenuPoint = document.getElementById("secondMenuPoint");
const thirdMenuPoint = document.getElementById("thirdMenuPoint");
const fourthMenuPoint = document.getElementById("fourthMenuPoint");
const fifthMenuPoint = document.getElementById("fifthMenuPoint");
// LIST POINTS
const firstListPoint = document.getElementById("firstListPoint");
const secondListPoint = document.getElementById("secondListPoint");
const thirdListPoint = document.getElementById("thirdListPoint");
const fourthListPoint = document.getElementById("fourthListPoint");
const fifthListPoint = document.getElementById("fifthListPoint");
let sectionListOffset = sectionList.offsetTop;
// MENU POINTS OFFSETS
const firstMenuPointOffset = firstMenuPoint.offsetTop;
const secondMenuPointOffset = secondMenuPoint.offsetTop;
const thirdMenuPointOffset = thirdMenuPoint.offsetTop;
const fourthMenuPointOffset = fourthMenuPoint.offsetTop;
const fifthMenuPointOffset = fifthMenuPoint.offsetTop;

function stickTheMenu() {
    if (window.pageYOffset >= sectionListOffset) {
        sectionList.classList.add("sticky");
        sectionMenu.classList.add("menuPosition");
    } else {
        sectionList.classList.remove("sticky");
        sectionMenu.classList.remove("menuPosition");
    }
}

function unStickTheMenu() {
    if (window.pageYOffset > sectionAbilitiesOffset - 350) {
        sectionList.classList.remove("sticky");
        sectionMenu.classList.remove("menuPosition");
    }
}

function activateTheListPoints() {
    if (window.pageYOffset >= firstMenuPointOffset - 100) {
        firstListPoint.classList.add("list-item--active");
    } else if (window.pageYOffset <= fourthMenuPointOffset) {
        firstListPoint.classList.remove("list-item--active");
    }
    if (window.pageYOffset >= fifthMenuPointOffset - 100) {
        fifthListPoint.classList.add("list-item--active");
    } else if (window.pageYOffset <= fifthMenuPointOffset) {
        fifthListPoint.classList.remove("list-item--active");
    }
    if (window.pageYOffset >= secondMenuPointOffset - 100) {
        secondListPoint.classList.add("list-item--active");
    } else if (window.pageYOffset <= fourthMenuPointOffset) {
        secondListPoint.classList.remove("list-item--active");
    }
    if (window.pageYOffset >= thirdMenuPointOffset - 100) {
        thirdListPoint.classList.add("list-item--active");
    } else if (window.pageYOffset <= fourthMenuPointOffset) {
        thirdListPoint.classList.remove("list-item--active");
    }
    if (window.pageYOffset >= fourthMenuPointOffset - 100) {
        fourthListPoint.classList.add("list-item--active");
    } else if (window.pageYOffset <= fourthMenuPointOffset) {
        fourthListPoint.classList.remove("list-item--active");
    }
}