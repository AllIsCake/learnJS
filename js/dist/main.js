"use strict";

// движение блоков от мышки
var parallax = function parallax(event) {
   document.querySelectorAll(".tetris1").forEach(function (elem) {
      elem.style.left = event.clientX / 30 + window.innerWidth / 50 + "px";
      elem.style.top = event.clientY / 20 + window.innerHeight / 50 + "px";
   });
   document.querySelectorAll(".tetris2").forEach(function (elem) {
      elem.style.left = event.clientX / 20 + window.innerWidth / 2.5 + "px";
      elem.style.top = event.clientY / 10 + window.innerHeight / 50 + "px";
   });
   document.querySelectorAll(".tetris3").forEach(function (elem) {
      elem.style.right = event.clientX / 30 + window.innerWidth / 10 + "px";
      elem.style.top = event.clientY / 20 + window.innerHeight / 4.5 + "px";
   });
   document.querySelectorAll(".tetris4").forEach(function (elem) {
      elem.style.left = event.clientX / 30 + window.innerWidth / 100 + "px";
      elem.style.top = event.clientY / 20 + window.innerHeight / 1.5 + "px";
   });
   document.querySelectorAll(".tetris5").forEach(function (elem) {
      elem.style.right = event.clientX / 20 + window.innerWidth / 100 + "px";
      elem.style.bottom = event.clientY / 10 + window.innerHeight / 40 + "px";
   });
};

document.addEventListener('mousemove', parallax);