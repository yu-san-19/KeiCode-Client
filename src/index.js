// Import Electron Module
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// Main Window
let mainWindow;

function createWindow() {
  // Make the window
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // Set URL of showing windows
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Move Developer Tools
  mainWindow.webContents.openDevTools();

  // Running when windows exited.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

//  Runnig when completed to ready crate window.
app.on('ready', createWindow);

// Runnig when quit all windws.
app.on('window-all-closed', () => {
  // if don't mac OS , application is down.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
// Runnig when application is actived.
app.on('activate', () => {
  // if the main window is hided
  if (mainWindow === null) {
    createWindow();
  }
});
