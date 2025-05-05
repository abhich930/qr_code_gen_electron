'use strict'
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 500,
        height: 650,
        icon: path.join(__dirname, 'icon.ico'),
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    });

    win.setMenu(null); // Optional: hides the default menu bar
    win.loadFile('index.html'); // Load your HTML file
}

app.whenReady().then(createWindow);

// Quit when all windows are closed (for non-macOS users)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
