const display = document.getElementById('newDisplay')
class Card {
    path;
    desc;
    titulo;
    link;
    constructor(titulo, desc, path) {
        this.titulo = titulo;
        this.desc = desc;
        this.path = path;

    }
}

const noticias = [
    new Card("test", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat blandit volutpat. In fringilla dignissim est ac dictum. Pellentesque quis.`,"../../../public/img/secondary.jpg"),
    new Card("test", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat blandit volutpat. In fringilla dignissim est ac dictum. Pellentesque quis.`,"../../../public/img/secondary.jpg"),
    new Card("test", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat blandit volutpat. In fringilla dignissim est ac dictum. Pellentesque quis.`,"../../../public/img/secondary.jpg"),
    new Card("test", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat blandit volutpat. In fringilla dignissim est ac dictum. Pellentesque quis.`,"../../../public/img/secondary.jpg"),
    new Card("test", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat blandit volutpat. In fringilla dignissim est ac dictum. Pellentesque quis.`,"../../../public/img/secondary.jpg"),
    new Card("test", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat blandit volutpat. In fringilla dignissim est ac dictum. Pellentesque quis.`,"../../../public/img/secondary.jpg"),
    new Card("test", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat blandit volutpat. In fringilla dignissim est ac dictum. Pellentesque quis.`,"../../../public/img/secondary.jpg"),
    new Card("test", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat blandit volutpat. In fringilla dignissim est ac dictum. Pellentesque quis.`,"../../../public/img/secondary.jpg"),
    new Card("test", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat blandit volutpat. In fringilla dignissim est ac dictum. Pellentesque quis.`,"../../../public/img/secondary.jpg"),
    new Card("test", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat blandit volutpat. In fringilla dignissim est ac dictum. Pellentesque quis.`,"../../../public/img/secondary.jpg"),
    new Card("test", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat blandit volutpat. In fringilla dignissim est ac dictum. Pellentesque quis.`,"../../../public/img/secondary.jpg"),
]

function render() {
        noticias.map(e => {
            const renderizer = `
            <div>
                <div class="content-card">
                  <div class="img">
                    <img src="${e.path}" alt="" />
                  </div>
                  <h4>${e.titulo}</h4>
                  <p>
                    ${e.desc}
                  </p>
                  <button type="button" class="btn btn-primary">ver mais</button>
                </div>
              </section>
            </div>
            `
            display.innerHTML += renderizer;

        })

}

render()