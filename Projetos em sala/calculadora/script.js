const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const n3 = document.querySelector('#n3');
const resultado = document.querySelector('#resultado');

function somar() {
    resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value);
}

function subtrair() {
    resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value);
}

function multiplicar() {
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value);
}

function dividir() {
    resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value);
}

function quadrado() {
    resultado.innerHTML = Math.pow(parseFloat(n1.value), 2);
}

function retangulo() {
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value);
}

function trapezio() {
    resultado.innerHTML = ((parseFloat(n1.value) + parseFloat(n2.value)) * parseFloat(n3.value)) / 2;
}

function losango() {
    resultado.innerHTML = (parseFloat(n1.value) * parseFloat(n2.value)) / 2;
}

function trianguloRetangulo() {
    resultado.innerHTML = (parseFloat(n1.value) * parseFloat(n2.value)) / 2;
}

function trianguloEquilatero() {
    resultado.innerHTML = (Math.pow(parseFloat(n1.value), 2) * Math.sqrt(3)) / 4;
}

function circunferencia() {
    resultado.innerHTML = Math.PI * Math.pow(parseFloat(n1.value), 2);
}

function seno() {
    const angulo = parseFloat(n1.value);
    resultado.innerHTML = Math.sin(angulo * Math.PI / 180);
}

function coseno() {
    const angulo = parseFloat(n1.value);
    resultado.innerHTML = Math.cos(angulo * Math.PI / 180);
}

function tangente() {
    const angulo = parseFloat(n1.value);
    resultado.innerHTML = Math.tan(angulo * Math.PI / 180);
}

function transformacaoGrausRadianos() {
    const graus = parseFloat(n1.value);
    const radianos = (graus * Math.PI / 180).toFixed(4);
    resultado.innerHTML = `${radianos} radianos`;
}

function teoremaPitagoras() {
    const a = parseFloat(n1.value);
    const b = parseFloat(n2.value);
    resultado.innerHTML = Math.sqrt(a * a + b * b).toFixed(4);
}