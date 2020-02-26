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
