function info(){//llama el .json con la info del perfil
    $.getJSON({
        url: "/data/info.json",
        success: (data)=>{
            localStorage.setItem('info', JSON.stringify(data))
        }
    })
}

function skill__DATA(){//llama el .json con los skills
    $.getJSON({
        url: "/data/skill.json",
        success: (data)=>{
            localStorage.setItem('skill', JSON.stringify(data))
        }
    })
}

function changeImg(img){//change the image of information´s main
    $('#main__div--bkImg').css({'background-image': `url(${img})`})
}

function createHTML(info){
    const {id, titulo,img, body} = info //desconstruccion del objeto de la busqueda
    const {item} = body //deconstruccion de los items
    $('#main__div__slice').html(`<h3>${titulo}</h3>`) //crea el titulo del articulo
    
    for (const [key, value] of Object.entries(item)){//itera el objeto y crea las listas con los items
        $('#main__div__slice').append(`<ul><li key="${key}">${value}</li></ul>`);
    }
    changeImg(img)
}

function searchTxtInfo(e){ //busca en el .json el {} que sea igual al btn clickeado
    const btnId = e.target.id // obtiene el id del button clickleado 
    const infoJSON = localStorage.getItem('info')
    const infoArray = JSON.parse(infoJSON)
    const infoArrayFind = infoArray.find(x => x.id == `${btnId}--txt`) //busca en el [info] la coincidencia con el btn
    createHTML(infoArrayFind)
}

function createDivSkill(skillArray){
    skillArray.map(x=> {
    $('#article__div--skill').append(`<div id='${x.id}' class='article__divSkill--style'><img src='${x.icon}' class='imgSkill__style' alt='${x.txt}'/><span>${x.txt}</span></div>`)
    })
}

function getSkill__DATA(){
    const skillJSON = localStorage.getItem('skill')
    const skillArray = JSON.parse(skillJSON)
    createDivSkill(skillArray) 
}

info() //envia al localstorage el .json con la info
skill__DATA()// envia al localstorage
$('.btn--main').on('click', searchTxtInfo) //el eventListener de los btn del main
$(document).load('/data/skill.json', getSkill__DATA)