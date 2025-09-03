document.addEventListener("DOMContentLoaded", () => {
    const countdownEl = document.getElementById("countdown");
    const videoContainer = document.getElementById("videoContainer");
    const finalVideo = document.getElementById("finalVideo");

    let totalTime = 5 * 60; // 5 minutes in seconds

    function updateCountdown() {
        if (totalTime <= 0) {
            clearInterval(interval);

            countdownEl.style.display = "none"; // hide countdown
            videoContainer.style.display = "block"; // show video
            finalVideo.play(); // autoplay video

            return; // ✅ stop function so it doesn’t continue into negatives
        }

        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        countdownEl.textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        totalTime--;
    }

    updateCountdown(); // initial render
    const interval = setInterval(updateCountdown, 1000);
});
