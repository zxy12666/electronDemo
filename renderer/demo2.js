const btn= this.document.querySelector('#btn')
const BroswerWindow = require('electron').remote.BrowserWindow

window.onload=()=>{
    btn.onclick = function(){
        newWin = new BroswerWindow({
            width:500,
            height:500,
        })
        newWin.loadFile('yellow.html')
        newWin.on('close',()=>{newWin=null})
    }
}

const {remote} = require('electron')
const { Menu, MenuItem } = remote
const menu = new Menu()
menu.append(new MenuItem({ label: 'MenuItem1', click() { console.log('item 1 clicked') } }))
menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }))
window.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    //把菜单模板添加到右键菜单
    menu.popup({window:remote.getCurrentWindow()})
    }
)
