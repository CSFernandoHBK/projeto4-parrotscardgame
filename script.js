function RNI(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }

const imagens = []

let cond = true;
let num = 0;
while(cond){
    num = prompt("Com quantas cartas deseja jogar? Insira um número par entre 4 e 14");
    if(num >= 4 && num <= 14 && num%2 === 0){
        cond = false;
    } else {
        alert("Insira um número par entre 4 e 14!");
    }
}

let carta = `<li class="carta">
<div class="carta-verso" onclick="virarcarta(this)">
    <img src="./img/front.png">
</div>
<div class="carta-virada">
</div>
</li>`

const ul = document.querySelector("ul");

for(let i=0;i<num;i++){
    ul.innerHTML += carta;
}

function virarcarta(card){
    console.log(card);
    //let n = RNI(0,6);
    //imagem = document.querySelector(".carta-verso");
    //console.log(imagem.innerHTML);
    //imagem.innerHTML = `<img src="./img/img${n}.gif"></img>`
}

