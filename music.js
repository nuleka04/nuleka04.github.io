function play(audioFile)
  {
    var audio = document.getElementById("mySong");
    audio.src = audioFile;
    audio.play();
  }

  function pause(audioFile){
        var audio = document.getElementById("mysong");
        audio.src = audioFile;
        audio.pause();
        icon.src = "images_audio/play.png";
  }