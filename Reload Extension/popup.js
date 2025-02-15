document.getElementById("startReload").addEventListener("click", function() {
    let seconds = document.getElementById("reloadTime").value;

    if (seconds && seconds > 0) {
        chrome.storage.local.set({ "reloadInterval": seconds }, () => {
            alert(`Page will reload every ${seconds} seconds.`);
            
            chrome.runtime.sendMessage({ action: "startCountdown", time: seconds });
        });
    } else {
        alert("Please enter a valid number greater than 0.");
    }
});

document.getElementById("stopReload").addEventListener("click", function() {
    chrome.storage.local.remove("reloadInterval", () => {
        alert("Auto reload stopped.");
        
        chrome.runtime.sendMessage({ action: "clearBadge" });

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: () => clearInterval(window.autoReloadTimer)
            });
        });
    });
});
