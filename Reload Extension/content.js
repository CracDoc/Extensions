chrome.storage.local.get("reloadInterval", function(data) {
    if (data.reloadInterval) {
        clearInterval(window.autoReloadTimer);

        let timeLeft = data.reloadInterval;
        window.autoReloadTimer = setInterval(() => {
            location.reload();
        }, timeLeft * 1000);

        chrome.runtime.sendMessage({ action: "startCountdown", time: timeLeft });
    }
});
