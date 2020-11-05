function mudaTexto() {
    let tag = document.getElementsByTagName('p')[1];
    tag.innerHTML = "programador fluente em inglês";


}
mudaTexto();

function changeColor() {
    let color = document.getElementsByClassName('main-content')[0];
    color.style.backgroundColor = "rgb(76,164,109)";
}
changeColor();

function changeToWhite() {
    let squareRed = document.getElementsByClassName('center-content')[0];
    squareRed.style.backgroundColor = "white";
}

changeToWhite();

function corrigeTexto() {
let correcao = document.getElementsByTagName('h1')[0];
correcao.innerText = "Exercício 5.1 - Javascript";
}

corrigeTexto();

function paragraphUpperCase() {
let paragraph = getElementsByTagName('p')[1];
document.write(paragraph.toUpperCase());
}

paragraphUpperCase();



