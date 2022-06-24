import {updatePage } from "../scripts/fetchData.js"

const $planetMenu = document.getElementById('planetMenu'),
$planetContent = document.getElementById('planetContent')



window.addEventListener('DOMContentLoaded',()=>{
    $planetMenu.addEventListener('click',async (e)=>{
        updatePage(e.currentTarget,e.target,$planetContent)
        // if(e.currentTarget===e.target) return
        
        // const dataobj = e.currentTarget.dataset.dataobj
        
        // const allElements = Array.from(e.currentTarget.children)
        // allElements.forEach(el=>{
        //     el.classList.remove('actual')
        // })
        // e.target.classList.add('actual')

        

        // const data = await  fetchData('destinations',e.target.dataset.planet)

        // Object.entries(data).forEach(part=>{
        //     const relativeElement =  $planetContent.querySelector(`[data-${dataobj}=${part[0]}]`)
        //     if(relativeElement.tagName==='IMG') relativeElement.src = part[1].webp
        //     else relativeElement.textContent = part[1]
        // })
    })
})