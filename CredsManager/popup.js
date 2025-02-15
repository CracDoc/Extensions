document.getElementById("save").addEventListener("click", function() {
    let website = document.getElementById("website").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (website && username && password) {
        let encryptedPassword = encrypt(password);

        chrome.storage.local.get("credentials", function(data) {
            let credentials = data.credentials || {};
            credentials[website] = { username, password: encryptedPassword };

            chrome.storage.local.set({ credentials }, function() {
                alert("Saved Successfully!");
                loadCredentials();
            });
        });
    }
});

function loadCredentials() {
    chrome.storage.local.get("credentials", function(data) {
        let credentials = data.credentials || {};
        let list = document.getElementById("savedCredentials");
        list.innerHTML = "";

        for (let site in credentials) {
            let li = document.createElement("li");
            li.textContent = `${site}: ${credentials[site].username}`;
            list.appendChild(li);
        }
    });
}

loadCredentials();
