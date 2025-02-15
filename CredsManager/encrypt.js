function encrypt(text, key = "my_secret_key") {
    return btoa(text + key);
}

function decrypt(encrypted, key = "my_secret_key") {
    return atob(encrypted).replace(key, "");
}
