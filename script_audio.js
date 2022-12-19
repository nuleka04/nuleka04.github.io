
var icon = document.getElementById("icon");
function play() {
    var audio = document.getElementById("mysong");
    audio.play();
    icon.src = "images_audio/pause.png";
  }
  function pause(){
    var audio = document.getElementById("mysong");
    audio.pause();
    icon.src = "images_audio/play.png";

  }