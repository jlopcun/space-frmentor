export {updatePage}

async function fetchData(final,query){
    try{
        const fetching = await fetch(`../starter-code/data.json`),
        json = await fetching.json()
        const data = json[final].find(x=>x.name===query)
        return data
    }catch(err){
        console.error(`An error has ocurred:${err}`)
    }
}


async function updatePage(menuContainer,menuElement,parentElement){
    if(menuContainer===menuElement) return
        
        const dataobj = menuContainer.dataset.dataobj
        
        const allElements = Array.from(menuContainer.children)
        allElements.forEach(el=>{
            el.classList.remove('actual')
        })
        menuElement.classList.add('actual')

        

        const data = await  fetchData('destinations',menuElement.dataset.planet)

        Object.entries(data).forEach(part=>{
            const relativeElement =  parentElement.querySelector(`[data-${dataobj}=${part[0]}]`)
            if(relativeElement.tagName==='IMG') relativeElement.src = part[1].webp
            else relativeElement.textContent = part[1]
        })
}