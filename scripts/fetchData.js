export {fetchData}

async function fetchData(final,planet){
    try{
        const fetching = await fetch(`../starter-code/data.json`),
        json = await fetching.json()
        const data = json[final].find(x=>x.name===planet)
        return data
    }catch(err){
        console.error(`An error has ocurred:${err}`)
    }
}