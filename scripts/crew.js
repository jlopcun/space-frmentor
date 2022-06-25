import {updatePage} from "./fetchData.js"

const $crewMenu = document.getElementById('crewMenu'),
$crewContent = document.getElementById('crewContent')


window.addEventListener('DOMContentLoaded',()=>{
    $crewMenu.addEventListener('click',async (e)=>{
        if(e.currentTarget===e.target) return
        updatePage(e.currentTarget,e.target.parentNode,$crewContent,'member')
        
        
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