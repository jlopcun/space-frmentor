export { openMenu }

const openMenu = (...elements) =>{
    elements.forEach(el=>{
        el.classList.toggle('OPENED')
    })
}