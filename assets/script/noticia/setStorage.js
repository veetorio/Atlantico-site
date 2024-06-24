function setBases(components){
    localStorage.setItem("card",components)
}

function renderMain(){
    const cards = document.getElementsByClassName("content-card")
    for (const iterator of cards) {
        iterator.children[3].addEventListener("click",(e) => {
           const elements = e.target.parentElement
           const childs = elements.children 
           const img = childs[0].children[0].src
           const h1 = childs[1].textContent
           const p = childs[2].textContent
           const link =  location.href

           const obj = {
                img,
                h1,
                p,
                link
            }
           
            setBases(JSON.stringify(obj))
            const origin = location.origin
            location.href = origin + "/assets/pages/noticiaModal.html"
        })
        
    }



}
renderMain()