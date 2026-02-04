const emojis = [
  "😀", "😂", "😎", "😍", "😴", "🤔", "😢", "😡",
  "🤩", "😇", "🥳", "🤪", "😜", "😅", "😭", "😤"
];

const emojiElement = document.getElementById("emoji");
const emojiBtn = document.getElementById("emojiBtn");

emojiBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];
  
  // Update emoji
  emojiElement.textContent = randomEmoji;

  // Small animation
  emojiElement.classList.add("animate");
  setTimeout(() => emojiElement.classList.remove("animate"), 300);
});
