const collection = document.getElementsByClassName("content-text")[0]

const header = collection.children[0].children

for (const iterator of header) {
    iterator.addEventListener("click", (e) => {
        if(e.target.textContent === "home"){
            location.href = "index.html"
        }else{
            location.href = "/assets/pages/" + e.target.textContent + ".html"
        }
    })
}