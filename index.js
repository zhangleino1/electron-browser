const electron = require('electron')
const { app, BrowserWindow } = electron
const Menu = electron.Menu
/*隐藏electron创听的菜单栏*/
Menu.setApplicationMenu(null)
let win
app.on('ready', () => {
  win = new BrowserWindow({icon:'./icon.ico'})
  win.loadURL('https://www.hao123.com/')
})