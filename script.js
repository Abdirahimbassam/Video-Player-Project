const videoEle = document.querySelector("#video");
const playBtn = document.querySelector("#play");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const time = document.querySelector("#time");
const volume = document.querySelector("#volume");
const fullScreenBtn = document.querySelector("#full-screen");

// play - pause
playBtn.addEventListener("click", ()=> {

    if(video.paused) {
        video.play();
        playBtn.querySelector("i").classList.add("fa-pause")
    } else {
        video.pause();
        playBtn.querySelector("i").classList.remove("fa-pause");
    }
})

// update Progress
video.addEventListener("timeupdate", () => {
    
    const percent = (video.currentTime / video.duration) * 100 ;
    progress.style.width = percent + "%";

    let current = formatTime(video.currentTime);
    let total = formatTime(video.duration);

    time.textContent = `${current} / ${total}`;

    
});

// click progress
progressContainer.addEventListener("click", (e) => {

    const width = progressContainer.clientWidth
    const clickX = e.offsetX;
    
    video.currentTime = ( clickX / width ) * video.duration ;

    if (mins > 99) {
        mins = `:${mins}`
    }
});

// volume
volume.addEventListener("input", (e)=> {
    video.volume = e.target.value;
})

// full screen
fullScreenBtn.addEventListener("click", () => {
    video.requestFullscreen();
}) 

// format time
function formatTime(seconds) {
    const mins = Math.floor (seconds / 60);
    let secs = Math.floor (seconds % 60);

    if (secs < 10) secs = "0" + secs;

    return `${mins}:${secs}`;
}