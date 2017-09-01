const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

require('dotenv').config();
require('electron-reload')(__dirname);

let win = null;

app.on('all-window-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', () => {
	win = new BrowserWindow({ width: 1000, height: 1000 });

	if (process.env.PACKAGE === 'true') {
		win.loadURL(url.format({
			pathname: path.join(__dirname, 'dist/index.html'),
			protocol: 'file',
			slashes: true
		}));
	} else {
		win.loadURL(process.env.HOST);
		win.webContents.openDevTools();
	}

	win.on('closed', () => {
		win = null;
	});
});
