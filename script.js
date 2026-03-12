// Check if Telegram WebApp is available
const tg = window.Telegram.WebApp;

// Expand to full screen immediately
if (tg) {
    tg.expand();
    tg.ready();
}

function sendPettyGift(amount) {
    // Show a quick haptic feedback for a premium feel
    if (tg.HapticFeedback) {
        tg.HapticFeedback.impactOccurred('heavy');
    }

    const data = {
        stars: amount,
        creator: "Permanently Petty",
        message: amount >= 250 ? "Unlocking VIP Status! 💎" : "Stay petty! 💅"
    };

    // Send the data string to the Python bot
    tg.sendData(JSON.stringify(data));
    
    // Close the app so the user sees the invoice immediately
    tg.close();
}
