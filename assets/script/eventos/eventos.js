class Ev {
    title;
    daySet;
    grau;
    setDesc;
    local;
    calcDayPosition = () => {
        return this.daySet % 7;
    }
    constructor(title,day, grau, desc, local) {
        this.title = title;
        this.daySet = day;
        this.grau = grau;
        this.setDesc = desc;
        this.local = local;
    }

}
class img {
    path;
    desc;
    constructor(){

    }
}
const banner = document.getElementById("banner")
const table = document.getElementById("table")
const Newdata = document.getElementById("date")




const events = [
    new Ev("vee",22, 1, "teste 1", "teste 1"),
    new Ev("titulo",22, 1, "teste 1", "teste 1"),
    new Ev("titulo",22, 1, "teste 1", "teste 1"),
    new Ev("titulo",22, 1, "teste 1", "teste 1"),
    new Ev("titulo",22, 1, "teste 1", "teste 1"),
    new Ev("titulo",22, 1, "teste 1", "teste 1"),
    new Ev("titulo",22, 1, "teste 1", "teste 1"),
]
const days = [
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
    "domingo"
]

const mesesDoAno = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];



const data = new Date()
function render() {
    const ano = data.getFullYear()
    const mes = data.getMonth() + 1
    Newdata.textContent = `${mesesDoAno[mes]} de ${ano}`
    const prioridade = {
        1: "text-primary",
        2: "text-success",
        3: "text-danger",
        4: "text-warning"
    }
    events.forEach((e,i)=> {
        const renderizer = `<td class="text-black ev-list text-center" data-desc="${e.setDesc}" data-local="${e.local}" data-dia="${e.daySet}" data-title="${e.title}">
                                ${e.title}
                                <div class="pos">
                                    <div class="spinner-grow spinner-grow-sm ${prioridade[e.grau]}" role="status">
                                    </div>
                                    ${`${data.getDate() + i}/${data.getMonth() + 1}`}
                                </div>
                            </td>
                            `

        table.innerHTML += renderizer;

    })
    const td = document.getElementsByClassName("ev-list")
    for (let i = 0; i < td.length;i++) {
        const item = td[i]
    item.addEventListener('click',(e) => {
        const item = e.target
        modal(item.dataset.desc,item.dataset.title,item.dataset.dia)
    })
        
    }



}

function modal(desc,title,new_data){
    const modalHtml = document.getElementById("modal")
    const titleModalHtml = document.getElementById("title-modal")
    const bodyModalHtml = document.getElementById("body-modal")
    const buttonModalHtml = document.getElementById("button-close-modal")

    titleModalHtml.textContent = title;
    bodyModalHtml.textContent = desc;
    modalHtml.style.display = "block"
    buttonModalHtml.addEventListener('click',() => {
        modalHtml.style.display = "none"
    })
}
render()
const day = events[0].calcDayPosition()
