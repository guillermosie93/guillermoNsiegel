let i = 0
let x = 0

function loadIndex() {
    $.ajax({
        url: '../html/index.html',
        method: 'GET',
        dataType: 'html',
        success: (data)=>{
            $('html').append(data)
            $('body').remove()
        },
    }) 
}


function load(){
    x++
    i++
    const hola = setInterval(()=>{
        $('#animation1__root').html(`<div class="div__load" id="divLoadLeft${i}"></div>`)
        $('#animation2__root').html(`<div class="div__load" id="divLoadRight${i}"></div>`)
        $('#porcen--txt').text(`${x}%`)
        $('#progress').val(x)
    }, 100)
    if (i == 10){
        i = 0
        clearInterval(hola)
    }
    if (x == 100){
        clearInterval(hola)
        clearInterval(bucle)
        let progressBar = $('#progress').val()
        progressBar == 99 ? loadIndex() : console.log('no entro');
    }
    
}

const bucle = setInterval(load, 100)

