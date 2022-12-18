function load(){
    $(".text").css({"bottom":"0px", opacity:'0'}).animate({"bottom":"100px", opacity:'1'}, "slow");
}
function toggle(){
    var trailer = document.querySelector(".trailer")
    var video = document.querySelector("video");
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}
