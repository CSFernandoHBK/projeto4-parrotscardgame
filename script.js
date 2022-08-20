//função de embaralhar
function comparador() { 
	return Math.random() - 0.5; 
}

//array com todas as imagens
const imagens = ["img0", "img1", "img2", "img3", "img4", "img5", "img6"]

//pergunta quantas cartas a pessoa quer
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

//gerar array de gifs selecionados

let conj1 = [];
for(let i=0; i<num/2; i++){
    conj1[i] = imagens[i];
}
let conj2 = conj1;
let conj = conj1.concat(conj2);

//embaralha a array

console.log(conj);
conj.sort(comparador);
console.log(conj);

//cria o template de carta
let carta = `<li class="carta">
<div class="carta-verso" onclick="virarcarta(this)">  
    <img src="./img/front.png">
</div>
<div class="imagem-frente escondido">
    <img src="./img/img1.gif">
</div>
</li>`



// coloca as cartas no código
const ul = document.querySelector("ul");

for(let i=0;i<num;i++){
    ul.innerHTML += carta;
}

// função de virar carta
function virarcarta(card){
    card.classList.toggle("carta-frente");
    document.querySelector(".imagem-frente").classList.toggle("escondido");
    document.querySelector
}

