// движение блоков от мышки
let parallax = (event) => {
   document.querySelectorAll(".tetris1").forEach(elem => {
      elem.style.left = event.clientX/30 + window.innerWidth/50 + "px";
      elem.style.top = event.clientY/20 +  window.innerHeight/50+ "px";
   });  
   document.querySelectorAll(".tetris2").forEach(elem => {
      elem.style.left = event.clientX/20 + window.innerWidth/2.5 + "px";
      elem.style.top = event.clientY/10 +  window.innerHeight/50 + "px";
   });
   document.querySelectorAll(".tetris3").forEach(elem => {
      elem.style.right = event.clientX/30 + window.innerWidth/10 + "px";
      elem.style.top = event.clientY/20 + window.innerHeight/4.5 + "px";
   });  
   document.querySelectorAll(".tetris4").forEach(elem => {
      elem.style.left= event.clientX/30 + window.innerWidth/100 + "px";
      elem.style.top = event.clientY/20 + window.innerHeight/1.5 + "px";
   }); 
   document.querySelectorAll(".tetris5").forEach(elem => {
      elem.style.right= event.clientX/20 + window.innerWidth/100 + "px";
      elem.style.bottom = event.clientY/10 +window.innerHeight/40 + "px";
   }); 
}

document.addEventListener('mousemove', parallax);