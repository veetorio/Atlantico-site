const btnBack = document.getElementById("back")
function renderNoticy() {
    const element = JSON.parse(localStorage.getItem("card"))
    const img = document.getElementById("figure")
    const h1 = document.getElementById("title")
    const p = document.getElementById("desc")
    const fal = document.getElementsByClassName("img-share")
    // console.log(element)

    for (const iterator of fal) {
        iterator.addEventListener("click", async (e) => {
            try {
                navigator.share({
                    title: "",
                    text: "Learn web development on MDN!",
                    url: element.link,
                })
            } catch (e) {
                alert(e)
            }
        })
    }
    h1.textContent = element.h1;
    p.textContent = element.p;
    img.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
    url(${element.img})`
    img.style.backgroundSize = `cover`
    img.style.backgroundPosition = `50% 50%`

    localStorage.clear()

}

btnBack.addEventListener("click",returnPage)
function returnPage(){
    const origin = location.origin 
    const path = "/assets/pages/noticias.html"
    location.href = origin + path
}

renderNoticy()