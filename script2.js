
// Your existing Level 4 JS can go below

function checkAnswer2() {
  const input = document.getElementById("answer2").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback2");

  // Expected decrypted key
  const correctAnswer = "mccloud";

  if (input === correctAnswer) {
    feedback.textContent = "Correct! ... - . --. .- -. --- --. .-. .- .--. .... -.--.";
    feedback.style.color = "lightgreen";

    setTimeout(() => {
      window.location.href = "level3.html"; // next puzzle
    }, 7000);
  } else {
    feedback.textContent = "Incorrect";
    feedback.style.color = "red";
  }
}
