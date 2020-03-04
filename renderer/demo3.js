//使用Shell在浏览器中打开
var {shell} =require ('electron')
var aHref=document.querySelector(('#aHref'))

aHref.onclick=function (e) {
    e.preventDefault()
    console.log(this)
    var href = this.getAttribute('href')
    shell.openExternal(href)
}

var mybtn = document.querySelector('#mybtn')

mybtn.onclick = function(e){

    window.open('./popup.html')
}
window.addEventListener('message',(msg)=>{
    let mytext = document.querySelector('#mytext')
    mytext.innerHTML = JSON.stringify(msg)
})
