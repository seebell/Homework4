var myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 80;

     function myClock() {
       document.getElementById("timer").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         
       }
     }
   }