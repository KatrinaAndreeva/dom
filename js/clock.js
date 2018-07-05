

// годинник який йде
// const clock = document.querySelector('.clock');

// setInterval(showTime, 1000);

// function showTime() {
// clock.innerHTML = '<b>' + (new Date()).toLocaleTimeString() + '</b>';
// }


// clock with buttons
// const btnStart = document.querySelector('.start');
// const btnStop = document.querySelector('.stop');
// const display = document.querySelector('.clock');

// btnStart.addEventListener('click', start);

// let startTime;

//  function start() {
//   startTime = new Date();
//     setInterval(showTime, 17); 
//  }
 
//   function showTime() {
//     const delta = (new Date()) - startTime;  
//     display.innerHTML = '<b>' + delta/1000 + '</b>';
//   }


//clock with jquery


$('.start').click(start);
let startTime;

 function start() {
  startTime = new Date();
    setInterval(showTime, 17); 
 }
function showTime() {
    const delta = (new Date()) - startTime;  
   $('.clock').html('<b>' + delta/1000 + '</b>');
  }
  
//   $(.'stop').click(stop);
//   function stop() {
//       clearTimeout(delta);
//   }