
// var icon = document.getElementById("icon");
// function play() {
//     var audio = document.getElementById("mysong");
//     audio.play();
//     icon.src = "images_audio/pause.png";
//   }
//   function pause(){
//     var audio = document.getElementById("mysong");
//     audio.pause();
//     icon.src = "images_audio/play.png";

//   }

//   let currentMusic = 0;

//   const music = document.querySelector('#audio');
//   const seekBar = document.querySelector('.seek-bar');
//   const songName = document.querySelector('.music-name');
// //   const artistName = document.querySelector('.artist-name');
// //   const currentTime = document.querySelector('.current-time');
// //   const musicDuration = document.querySelector('.song-duration');
// //   const playBtn = document.querySelector('.play-btn');

// //   function play1(){
// //     icon.src = "images_audio/pause.png";
// //   }

// $(document).ready(function() { // starting our code when document is loaded
//     $('.icon').click(function() { // attaching this code to click event of any html element having _playbtn_ class
//         $(this).data('song'); // getting song name from _data_ container of clicked element $(this)
//         $('#mySong').attr('src',songName).play(); // getting element myAudio bi its id, then setting it's src attribute and, finally, starting playback 
//     });
// });

// function StartOrStop(audioFile)
//   {
//     var audio = document.getElementById("mySong");
//     audio.src = audioFile;
//     if(audio.paused==false)
//      {
//         audio.Paused();
//      }
//      else
//      {
//        audio.play();
//      }
//   }

function play(audioFile)
  {
    var audio = document.getElementById("mySong");
    audio.src = audioFile;
    if(audio.paused==false)
     {
        audio.Paused();
     }
     else
     {
       audio.play();
     }
  }
  function pause(audioFile){
        var audio = document.getElementById("mysong");
        audio.src = audioFile;
        audio.pause();
        icon.src = "images_audio/play.png";
  }