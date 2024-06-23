const loader = document.getElementById("loader")
const body = document.getElementById("root")
window.addEventListener('load', () => {
    body.style.display = "none";
    setTimeout(() => {
        loader.style.transition = "1s"
        loader.style.opacity = "0"
        setTimeout(() => {
            loader.style.display = "none"
            body.style.display = "block"
        },600)
    }, 2000)
})