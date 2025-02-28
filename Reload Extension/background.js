let countdownTimer;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "startCountdown") {
        let timeLeft = message.time;

        clearInterval(countdownTimer);
        updateBadge(timeLeft);

        countdownTimer = setInterval(() => {
            timeLeft--;
            if (timeLeft > 0) {
                updateBadge(timeLeft);
            } else {
                clearInterval(countdownTimer);
            }
        }, 1000);
    }

    if (message.action === "clearBadge") {
        clearInterval(countdownTimer);
        chrome.action.setBadgeText({ text: "" });
    }
});

function updateBadge(time) {
    chrome.action.setBadgeText({ text: String(time) });
    chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
}

