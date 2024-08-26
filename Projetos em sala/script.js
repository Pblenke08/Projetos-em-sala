const display1 = document.getElementById("display1")
const display2 = document.getElementById("display2")
const resultado = document.querySelector(".resultado");

function IR() {
    let bruto = display1.value * display2.value;
    let IR = 0.11 * bruto;
    
    resultado.innerHTML = "-" +  IR
    
}

function INSS () {
    let bruto = display1.value * display2.value;
    let inss = 0.08 * bruto;
   
    resultado.innerHTML = "-" + inss.toFixed(2)
}

function sindicato () { 
    let bruto = display1.value * display2.value;
    let Sindicato = 0.05 * bruto;
    
    resultado.innerHTML = "-" + Sindicato.toFixed(2)
}

function SalárioLíquido (){ 
    let bruto = display1.value * display2.value;
    let inss = 0.08 * bruto;
    let Sindicato = 0.05 * bruto;
    let IR = 0.11 * bruto;
    let liquido = bruto - IR - inss - Sindicato;
    resultado.innerHTML = liquido.toFixed(2)
}

function Saláriobruto () { 
    let bruto = display1.value * display2.value;
    resultado.innerHTML = bruto.toFixed(2)
}