import { inlcudeHTML } from './inlcudeHTML.js'
import { openMenu } from './openMenu.js'



window.addEventListener('DOMContentLoaded',()=>{
    inlcudeHTML('html/navigation.html',null,()=>{
        const menuOpener = document.getElementById('menuOpener')
        menuOpener.addEventListener('click',(e)=>{
        openMenu(e.target,document.body,document.getElementById('pageUl'))
    })
    })
    
        
})