// Roll the dice logic
document.getElementById("rollButton").addEventListener("click", function() {
  let roll = Math.floor(Math.random() * 6) + 1;
  let resultText = document.getElementById("resultText");

  if (roll === 6) {
    resultText.textContent = "You Win! 🎉";
    resultText.style.color = "green";
  } else {
    resultText.textContent = "You Lose! 😢";
    resultText.style.color = "red";
  }
});

// Redirect to your AdSense-linked website
document.getElementById("visitSite").addEventListener("click", function() {
  chrome.tabs.create({ url: "https://david242012.github.io/" });
});