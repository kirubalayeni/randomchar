$(document).ready(function () {
    score = 0;
    time = 10;
     randomchar = String.fromCharCode(97+Math.floor(Math.random()*26));
     $("#box1").html("<h1>" + randomchar + "</h1>");
     $(document).keypress(function (e) { 
      Htmlline = $("h1").text();
      if (e.key == Htmlline) {
        $("h1").hide();
        score = score + 5;
        $("#score").text(score);
        randomchar = String.fromCharCode(97+Math.floor(Math.random()*26));
        $("#box1").html("<h1>" + randomchar + "</h1>");
      }
     });
      
 timeinterval  = setInterval(function()  {
        time = time - 1;
        $("#time").text(time);
        if (time == 0) {
         clearInterval(timeinterval) ;
         $("#box1").hide(); 
          $("#gameover").html("gameover");
        }
     }, 1000);


});

