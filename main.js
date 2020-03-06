const { app, BrowserView ,BrowserWindow } = require('electron')

let mainWindow = null ;  //声明要打开的主窗口
app.on('ready',()=>{
    require('./main/menu.js')
    mainWindow = new BrowserWindow(
        {
            width:400,
            height:400,
            webPreferences:{ nodeIntegration:true}
        })   //设置打开的窗口大小
    mainWindow.webContents.openDevTools()
    mainWindow.loadFile('demo5.html')  //加载那个页面

    // var view = new BrowserView()   //new出对象
    // mainWindow.setBrowserView(view)   // 在主窗口中设置view可用
    // view.setBounds({x:0,y:100,width:1200, height:800})  //定义view的具体样式和位置
    // view.webContents.loadURL('https://jspang.com')

    //监听关闭事件，把主窗口设置为null
    mainWindow.on('closed',()=>{
        mainWindow = null
    })

})
