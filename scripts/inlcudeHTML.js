export {inlcudeHTML}



async function inlcudeHTML(file,insertBefore,callback){
    try{
        const parser = new DOMParser()

        const fetching = await fetch(file),
        text = await fetching.text(),
        HTML = parser.parseFromString(text,'text/html')

        Array.from(HTML.body.children).forEach(el=>{
            if(el.tagName === 'script') return;
            (insertBefore)
            ?document.body.insertBefore(el,insertBefore)
            :document.body.prepend(el)
        })
        
        callback()

    }catch(err){
        console.log(err)
    }
}