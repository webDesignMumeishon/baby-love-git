var rtasCorrectas = 0

function comienzoRelacion(para){
    let rta = para.value
    let regex = /^julio$/gi

    if(regex.test(rta)){
        document.getElementById("respuesta1").style.color = "green"
        document.getElementById("respuesta1").innerHTML = "Correcto"
        rtasCorrectas++
    }
    else{
        document.getElementById("respuesta1").style.color = "red"
        document.getElementById("respuesta1").innerHTML = "Incorrecto"
    }
}

function postreFav(para){
    let rta = para.value
    let regex = /^helado$/gi

    if(regex.test(rta)){
        document.getElementById("respuesta2").style.color = "green"
        document.getElementById("respuesta2").innerHTML = "Correcto"
        rtasCorrectas++
    }
    else{
        document.getElementById("respuesta2").style.color = "red"
        document.getElementById("respuesta2").innerHTML = "Incorrecto"
    }
}

function destino(para){
    let rta = para.value
    let regex = /^miami$/gi

    if(regex.test(rta)){
        document.getElementById("respuesta3").style.color = "green"
        document.getElementById("respuesta3").innerHTML = "Correcto"
        rtasCorrectas++
    }
    else{
        document.getElementById("respuesta3").style.color = "red"
        document.getElementById("respuesta3").innerHTML = "Incorrecto"
    }
}

function calcuAciertos(){
    alert(`El porcentaje de acierto es: ${Math.round(rtasCorrectas/3)*100}%`)
}

