let cond = true;
let num = 0;
while(cond){
    num = prompt("Quantas cartas?");
    if(num >= 4 && num <= 14 && num%2 === 0){
        cond = false;
    } else {
        alert("Insira um número par entre 4 e 14!");
    }
}

let contador = 0;

while(contador<num){
    carta = document.querySelector(".carta"+contador)
    carta.classList.remove("escondido");
    contador++;
}