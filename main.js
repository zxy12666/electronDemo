const { app, BrowserWindow } = require('electron')

let mainWindow = null ;  //声明要打开的主窗口
app.on('ready',()=>{
    require('./main/menu.js')
    mainWindow = new BrowserWindow(
        {
            width:400,
            height:400,
            webPreferences:{ nodeIntegration:true}
        })   //设置打开的窗口大小

    mainWindow.loadFile('demo2.html')  //加载那个页面

    //监听关闭事件，把主窗口设置为null
    mainWindow.on('closed',()=>{
        mainWindow = null
    })

})
