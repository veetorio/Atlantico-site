const obj = {
    titulo : undefined,
    corpo : undefined,
    link  : undefined,
}

const fal = document.getElementsByClassName("img-share")

for (const iterator of fal) {
    iterator.addEventListener("click", async (e) => {
        try{
            navigator.share( {
                title: "",
                text: "Learn web development on MDN!",
                url: "https://developer.mozilla.org",
              })
        }catch(e){
            alert(e)
        }
    })
}