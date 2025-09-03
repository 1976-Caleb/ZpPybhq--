
// Your existing Level 4 JS can go below

function checkAnswer3() {
  const input = document.getElementById("answer3").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback3");

  // Expected hidden key
  const correctAnswer = "nikola tesla";

  if (input === correctAnswer) {
    feedback.textContent = "Correct!";
    feedback.style.color = "lightgreen";

    setTimeout(() => {
      window.location.href = "level4.html"; // next puzzle
    }, 7000);
  } else {
    feedback.textContent = "❌ Incorrect. Hint: Look inside the image carefully.";
    feedback.style.color = "red";
  }
}
