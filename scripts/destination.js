import { fetchData } from "../scripts/fetchData.js"

const $planetMenu = document.getElementById('planetMenu'),
$planetContent = document.getElementById('planetContent')



window.addEventListener('DOMContentLoaded',()=>{
    $planetMenu.addEventListener('click',async (e)=>{
        if(e.currentTarget===e.target) return 
        const allElements = Array.from(e.currentTarget.children)
        allElements.forEach(el=>{
            el.classList.remove('actual')
        })
        e.target.classList.add('actual')

        
        const data = await  fetchData('destinations',e.target.dataset.planet)
        
        const elementsToReplaceData = {}

        $planetContent.querySelectorAll('[data-planetInf]').forEach(el=>{
            elementsToReplaceData[el.dataset.planetinf] = el
        })
         
        elementsToReplaceData.image.src = data.images.webp
        elementsToReplaceData.name.textContent = data.name
        elementsToReplaceData.desc.textContent = data.description
        elementsToReplaceData.dist.textContent = data.distance
        elementsToReplaceData.time.textContent = data.travel
        
    })
})