

const correctAnswer = "1978"; // final key
const submitBtn = document.getElementById("submitBtn");
const answerInput = document.getElementById("answer");
const feedback = document.getElementById("feedback");

const bgAudio = document.getElementById("bgAudio");
const playPauseBtn = document.getElementById("playPauseBtn");

// Play/Pause toggle
playPauseBtn.addEventListener("click", () => {
    if(bgAudio.paused){
        bgAudio.play();
        playPauseBtn.textContent = "Pause";
    } else {
        bgAudio.pause();
        playPauseBtn.textContent = "Play";
    }
});

// Check key input
submitBtn.addEventListener("click", () => {
    const input = answerInput.value.trim();

    if(input === correctAnswer){
        feedback.textContent = "Patience is a virtue...";
        feedback.style.color = "green";

        // Play success sound
        const successAudio = new Audio('audio/success.mp3');
        successAudio.play();

        // Stop background music
        bgAudio.pause();
        bgAudio.currentTime = 0;

        // Clear input
        answerInput.value = "";

        // Redirect to Level 5 after 2 seconds
        setTimeout(() => {
            window.location.href = "clock.html";
        }, 2000);

    } else {
        feedback.textContent = "❌ Incorrect. Try again!";
        feedback.style.color = "red";
        answerInput.value = "";
    }
});
