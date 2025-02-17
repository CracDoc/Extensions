CredsManager Chrome Extension

🚀 Overview

This Chrome extension securely stores credentials and prompts the user to autofill them on login pages. The extension encrypts passwords before storage, ensuring safety while providing an easy-to-use interface for managing credentials.

📂 Folder Structure

📁 Credsmanager-extension/
   ├── 📄 manifest.json      # Extension configuration file
   ├── 📄 popup.html         # UI for storing and viewing credentials
   ├── 📄 popup.js           # Handles credential storage
   ├── 📄 content.js         # Detects login pages and suggests autofill
   ├── 📄 background.js      # Initializes storage
   ├── 🎨 styles.css         # Styles for the UI
   ├── 🖼️ icon.png           # Extension icon
   ├── 🔑 encrypt.js         # AES encryption for password security

📌 Features

✅ Securely stores credentials using Chrome Storage API✅ Encrypts passwords before saving them✅ Detects login pages and prompts autofill✅ Provides a popup UI to view, edit, and delete credentials✅ Supports multiple websites with different credentials✅ Works across all login pages (http & https)

🔧 Installation

Download or clone this repository.

Open Google Chrome and navigate to chrome://extensions/.

Enable Developer Mode (toggle on the top right corner).

Click Load Unpacked and select the Credsmanager-extension/ folder.

The extension will be added to your Chrome toolbar.

🛠 Usage

Saving Credentials

Click the extension icon in the toolbar.

Enter the website URL, username, and password.

Click Save.

Autofilling Credentials

Navigate to a login page of a website you have saved credentials for.

The extension will detect the page and prompt you to autofill the stored credentials.

Click OK, and the fields will be populated automatically.

🔒 Security Considerations

⚠️ This is a basic version for learning purposes. To improve security:

Implement a master password prompt to access stored credentials.

Use Chrome Storage Sync for multi-device credential access.

Implement Google OAuth for added security.

🔗 Future Enhancements

Add a master password requirement before showing credentials.

Sync stored passwords across devices using Google Chrome Sync.

Support 2FA authentication reminders.

Implement a backup and restore feature for stored credentials.

💡 Contributing

Feel free to fork this repository, create a new branch, and submit a Pull Request with your improvements!

📜 License

This project is licensed under the MIT License – you are free to modify and distribute it.