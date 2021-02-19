
# 核心技术
- node
- electron
- electron-builder 打包exe
> Electron 可以让你使用纯 JavaScript 调用丰富的原生 APIs 来创造桌面应用。你可以把它看作是专注于桌面应用而不是 web 服务器的，io.js 的一个变体。
> 这不意味着 Electron 是绑定了 GUI 库的 JavaScript。相反，Electron 使用 web 页面作为它的 GUI，所以你能把它看作成一个被 JavaScript 控制的，精简版的 Chromium 浏览器。

# 核心代码
index.js
```javascript
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
```
package.json
```javascript
{
  "name": "qmkj",
  "version": "1.0.0",
  "description": "qmkj for garden client",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "electron .",
    "pack": " electron-builder --dir ",
    "dist": " electron-builder --win --x64"
  },
  "author": "zl",
  "license": "ISC",
  "devDependencies": {
    "electron": "^8.0.0",
    "electron-builder": "^22.9.1"
  },
  "dependencies": {},
  "build": {
    "appId": "lovepythonBrowser",
    "productName": "lovepythonBrowser",
    "copyright": "微信公众号lovepythoncn",
    "directories": {
      "output": "build"
    },
    "win": {
      "target": [
        "nsis"
      ],
      "icon": "./favicon.ico"
    },
    "linux": {
      "target": [
        "AppImage"
      ]
    },
    "extends": null,
    "asar": true,
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true,
      "installerHeaderIcon": "./favicon.ico",
      "installerIcon": "./favicon.ico",
      "createDesktopShortcut": true
    }
  }
}

```
# 打包exe
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131232620968.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1YW5nbWluZ2xlaWx1bw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131232620754.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1YW5nbWluZ2xlaWx1bw==,size_16,color_FFFFFF,t_70)
如果想定制请加微信号【qingmiaogu】或者扫描左侧微信