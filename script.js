const tg = window.Telegram.WebApp;
tg.expand();

function sendGift() {
  const creator = document.getElementById('creator').value;
  const amount = document.getElementById('amount').value;
  const msg = document.getElementById('message').value;

  if (!amount || amount < 1) {
    tg.showAlert("Please enter a valid amount of Stars! 💝");
    return;
  }

  // 🎊 The Celebration
  confetti({
    particleCount: 150,
    spread: 60,
    origin: { y: 0.7 },
    colors: ['#ff69b4', '#9b59b6', '#f7d02c']
  });

  // Package for Termux
  const data = {
    creator: creator,
    stars: parseInt(amount),
    message: msg || "Gifting from the App"
  };

  // Wait for the sparkles, then send
  setTimeout(() => {
    tg.sendData(JSON.stringify(data));
  }, 1200);
}
