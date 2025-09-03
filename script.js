function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");

  if (input === "great expectations") {
    feedback.textContent = "Correct! -.-. .- . ... . .-.   -.-. .. .--. .... . .-.";
    feedback.style.color = "lightgreen";

    // After a short delay, redirect to Level 2 (when we create it)
    setTimeout(() => {
      window.location.href = "level2.html";
    }, 7000);
  } else {
    feedback.textContent = "Incorrect.";
    feedback.style.color = "red";
  }
}
