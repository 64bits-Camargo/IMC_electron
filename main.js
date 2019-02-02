const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 460, height: 380 })

  
  win.setMenu(null)

  // e carrega index.html do app.
  win.loadFile('index.html')
  
  
}


app.on('ready', createWindow)