chrome.storage.local.get("credentials", function(data) {
    let credentials = data.credentials || {};
    let currentURL = window.location.hostname;

    if (credentials[currentURL]) {
        let usernameField = document.querySelector("input[type='text'], input[type='email']");
        let passwordField = document.querySelector("input[type='password']");

        if (usernameField && passwordField) {
            let confirmAutofill = confirm(`Do you want to autofill credentials for ${currentURL}?`);

            if (confirmAutofill) {
                usernameField.value = credentials[currentURL].username;
                passwordField.value = decrypt(credentials[currentURL].password);
            }
        }
    }
});
