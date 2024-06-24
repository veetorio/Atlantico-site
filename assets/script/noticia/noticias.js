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
  new Card("M11 3 X 1 ATLÂNTICO", `Neste último sábado (08/06) a Sociedade Esportiva Atlântico, em partida valida pela 2ª rodada da III Copa Interbairro de Futebol de Base, foi até o Estádio Beira Rio/Ilhinha.
    Onde enfrentou a equipe do M11 nas categorias Sub15 e Sub17 `, "../../../public/img/noticias/img.jpeg"),
  new Card("Estreia da Sociedade Esportiva Atlântico", `Estreia da Sociedade Esportiva Atlântico, sub15 e sub17, na III Copa Interbairro de Futebol de Base.`, "../../../public/img/noticias/img2.jpeg"),
  new Card("Ações do Projeto Rede de Prosperidade Familiar, em parceria com o CIEDS/VALE", `Reunião de apresentação da nossa assistente social, Amanda, e alinhamento com as ações do projeto REDE DE PROSPERIDADE FAMILIAR e o CIEDS.
Muitas novidades virão logo, logo!`, "../../../public/img/noticias/img3.jpeg"),
  new Card("Escola de Futebol S.E.Atlantico, franquia oficial Prudentópolis Futebol Clube, aqui a preparação não para. Aqui", `
    Escola de Futebol S.E.Atlantico, franquia oficial Prudentópolis Futebol Clube, aqui a preparação não para.
     Aqui uma amostra do nosso trabalho deste domingo.
     Comando professor Eduardo e professor Nhopir.
     Coordenação Prof Josuel Silva`, "../../../public/img/noticias/img5.jpeg"),
  new Card("REDE DE PROSPERIDADE FAMILIAR e o CIEDS. Muitas novidades virão logo, logo!", `Reunião de apresentação da nossa assistente social, Amanda, e alinhamento com as ações do projeto REDE DE PROSPERIDADE FAMILIAR e o CIEDS. Muitas novidades virão logo, logo!`, "../../../public/img/noticias/img6.jpeg"),
  new Card("Seminário de Comunicação Comunitária", `Seminário de Comunicação Comunitária promovido pela Rede de Prosperidade Familiar/CIEDS/Vale.`, "../../../public/img/noticias/img7.jpeg"),
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