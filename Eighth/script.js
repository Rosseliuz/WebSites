var btn = document.getElementById('play-pause');
var btn_2 = document.getElementById('play-pause-2');
var video = document.getElementById('video');
var mobile = document.getElementById('mobile');

function togglePlayPause() {
    if (video.paused) {
        btn.className = "pause";
        btn_2.className = "pause";
        video.play();
        mobile.play();
    } else {
        btn.className = "play";
        btn_2.className = "play";
        video.pause();
        mobile.pause();
    }
}

btn.onclick = function() {
    togglePlayPause();
}

btn_2.onclick = function() {
    togglePlayPause();
}