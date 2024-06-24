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
class Img {
    path;
    desc;
    constructor(path,desc){
        this.path = path;
        this.desc = desc;
    }
}
class Banner{
    path;
    title;
    desc;
    constructor(path,title,desc){
        this.path = path;
        this.desc = desc;
        this.title = title;

    }
}
const banner = document.getElementById("banner")
const table = document.getElementById("table")
const Newdata = document.getElementById("date")
const data = new Date()
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
const images = [
    new Img("img.jpeg","M11 3 X 1 ATLÂNTICO"),
    new Img("img2.jpeg","Estreia da Sociedade Esportiva Atlântico, sub15 e sub17, na III Copa Interbairro de Futebol de Base.")
]










function renderBanner(){
    const newBanner = new Banner("../../../public/img/banner.jpeg","Momento importante para a vida dessas crianças e adolescentes do projeto ATLÂNTICO.","Foi uma honra receber em nosso CT o campeão da Champions League SALOMON CALU, pelo Chelsea.Momento importante para a vida dessas crianças e adolescentes do projeto ATLÂNTICO.");
    const collection = banner.children
    banner
        .style
        .background = `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),url("${newBanner.path}") no-repeat`;
    banner
        .style
        .backgroundSize = "cover"
    banner
        .style
        .backgroundPosition = "50% 20%"
    collection[0]
        .textContent = newBanner.title
    collection[1]
        .textContent = newBanner.desc
    
}

function renderCartaz(){
    const cartazes = document.getElementsByClassName("noticy")
    const path = "../../../public/img/cartazes/"
    for (let i = 0;i < cartazes.length;i++) {
        cartazes[i].style.background =`url(${path + images[i].path})`;
        cartazes[i].style.backgroundSize = "cover";
        cartazes[i].dataset.desc = images[i].desc
        cartazes[i].addEventListener("click",passPage)
    }
    
}





function renderBanner(){
    const newBanner = new Banner("../../../public/img/banner.jpeg","Momento importante para a vida dessas crianças e adolescentes do projeto ATLÂNTICO.","Foi uma honra receber em nosso CT o campeão da Champions League SALOMON CALU, pelo Chelsea.Momento importante para a vida dessas crianças e adolescentes do projeto ATLÂNTICO.");
    const collection = banner.children
    banner
        .style
        .background = `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),url("${newBanner.path}") no-repeat`;
    banner
        .style
        .backgroundSize = "cover"
    banner
        .style
        .backgroundPosition = "50% 20%"
    collection[0]
        .textContent = newBanner.title
    collection[1]
        .textContent = newBanner.desc
    
}

function renderCartaz(){
    const cartazes = document.getElementsByClassName("noticy")
    const path = "../../../public/img/cartazes/"
    for (let i = 0;i < cartazes.length;i++) {
        cartazes[i].style.background =`url(${path + images[i].path})`;
        cartazes[i].style.backgroundSize = "cover";
        cartazes[i].dataset.desc = images[i].desc
        cartazes[i].addEventListener("click",passPage)
    }
    
}






function renderBanner(){
    const newBanner = new Banner("../../../public/img/banner.jpeg","Momento importante para a vida dessas crianças e adolescentes do projeto ATLÂNTICO.","Foi uma honra receber em nosso CT o campeão da Champions League SALOMON CALU, pelo Chelsea.Momento importante para a vida dessas crianças e adolescentes do projeto ATLÂNTICO.");
    const collection = banner.children
    banner
        .style
        .background = `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),url("${newBanner.path}") no-repeat`;
    banner
        .style
        .backgroundSize = "cover"
    banner
        .style
        .backgroundPosition = "50% 20%"
    collection[0]
        .textContent = newBanner.title
    collection[1]
        .textContent = newBanner.desc
    
}

function renderCartaz(){
    const cartazes = document.getElementsByClassName("noticy")
    const path = "../../../public/img/cartazes/"
    for (let i = 0;i < cartazes.length;i++) {
        cartazes[i].style.background =`url(${path + images[i].path})`;
        cartazes[i].style.backgroundSize = "cover";
        cartazes[i].dataset.desc = images[i].desc
        cartazes[i].addEventListener("click",passPage)
    }
    
}


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

function passPage(){
    const origin = location.origin
    location.href = origin +  "Atlantico-site/assets/pages/" + "noticias.html"
}
render()
renderBanner()
renderCartaz()
