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
    img.style.background = `url(${element.img})`
    img.style.backgroundSize = `cover`

    localStorage.clear()

}

renderNoticy()