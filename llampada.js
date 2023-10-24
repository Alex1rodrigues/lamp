var elem = document.querySelectorAll('turnOn');  
var elem = document.querySelectorAll('turnOff');
var elem = document.querySelectorAll('lamp');



//Função que verifica se a lampada está quebrada
function isLampBroken(){
    return lamp.src.indexOf('Quebrada') > -1
}

//Função que liga a lampada
function lampOn(){
    if(!isLampBroken()){
        lamp.src = './img/Acesa.jpg'
    }
}
//Função que desliga a lampada
function lampOff(){
    if(!isLampBroken()){
        lamp.src = './img/Apagada.jpg'
    }
}
function lampBroken(){
    lamp.src = "./img/Quebrada.jpg"
}
turnOn.addEventListener('click', lampOn);       //evento de click
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);     //evento de mouse
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);  //evento de duplo click
