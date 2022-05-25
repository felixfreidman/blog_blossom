"use strict";

var sectionList = document.getElementById("sectionList");
var sectionMenu = document.getElementById("sectionMenu"); // MENU POINTS

var firstMenuPoint = document.getElementById("firstMenuPoint");
var secondMenuPoint = document.getElementById("secondMenuPoint");
var thirdMenuPoint = document.getElementById("thirdMenuPoint");
var fourthMenuPoint = document.getElementById("fourthMenuPoint");
var fifthMenuPoint = document.getElementById("fifthMenuPoint"); // LIST POINTS

var firstListPoint = document.getElementById("firstListPoint");
var secondListPoint = document.getElementById("secondListPoint");
var thirdListPoint = document.getElementById("thirdListPoint");
var fourthListPoint = document.getElementById("fourthListPoint");
var fifthListPoint = document.getElementById("fifthListPoint");
var sectionListOffset = sectionList.offsetTop; // MENU POINTS OFFSETS

var firstMenuPointOffset = firstMenuPoint.offsetTop;
var secondMenuPointOffset = secondMenuPoint.offsetTop;
var thirdMenuPointOffset = thirdMenuPoint.offsetTop;
var fourthMenuPointOffset = fourthMenuPoint.offsetTop;
var fifthMenuPointOffset = fifthMenuPoint.offsetTop;

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
} // // header-swiper
// var swiper = new Swiper('#main-swiper', {
//   fadeEffect: {
//     crossFade: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next--header',
//     prevEl: '.swiper-button-prev--header',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   loop: true,
//   // autoplay: {
//   //   delay: 2300,
//   // },
//   fadeEffect: {
//     crossFade: true
//   },
//   speed: 800,
//   watchSlidesProgress: true,
//   watchVisibility: true,
//   disableOnInteraction: true,
// });