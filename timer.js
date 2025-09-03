document.addEventListener("DOMContentLoaded", () => {
    const timerEl = document.getElementById("timer");
    const totalTimeMs = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    // Get or set the game start time
    let startTime = localStorage.getItem("gameStartTime");
    if (!startTime) {
        startTime = Date.now();
        localStorage.setItem("gameStartTime", startTime);
    } else {
        startTime = parseInt(startTime);
    }

    function updateTimer() {
        const now = Date.now();
        const elapsed = now - startTime;
        let remaining = totalTimeMs - elapsed;

        if (remaining <= 0) {
            remaining = 0;
            timerEl.textContent = "00:00:00";
            clearInterval(interval);
            alert("⏰ Time's up! The game is over.");
            return;
        }

        const hours = Math.floor(remaining / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        timerEl.textContent = 
            `${hours.toString().padStart(2,'0')}:` +
            `${minutes.toString().padStart(2,'0')}:` +
            `${seconds.toString().padStart(2,'0')}`;
    }

    updateTimer(); // initial display
    const interval = setInterval(updateTimer, 1000);
});
