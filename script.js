//função de embaralhar

function comparador() { 
	return Math.random() - 0.5; 
}

//variaveis globais
let cartaSelecionada1;
let cartaSelecionada2;
let verso;
let cartaTotal;
let frente;
let contJogadas = 0;
let contViradas = 0;


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

conj.sort(comparador);

// coloca as cartas no código

let carta = 0;

const ul = document.querySelector("ul");

for(let i=0;i<num;i++){
    carta = 
    `<li class="carta" onclick="virarcarta(this)">
        <div class="verso item${i}">  
            <img src="./img/front.png">
        </div>
        <div class="frente escondido item${i}">
            <img src="./img/${conj[i]}.gif">
        </div>
    </li>`
    //console.log(conj[i]);
    ul.innerHTML += carta;
}

// função de virar carta
function virarcarta(card){
    cartaTotal = card;
    verso = card.querySelector(".verso");
    frente = card.querySelector(".frente");

    verso.classList.add("escondido");
    cartaTotal.classList.add("virada");
    frente.classList.remove("escondido");

    cartaTotal.classList.add("selecionada");

    if(cartaSelecionada1 == null && cartaSelecionada2 == null){
        cartaSelecionada1 = frente.innerHTML;
    } else {
        cartaSelecionada2 = frente.innerHTML;
    }

    if(cartaSelecionada1 != null && cartaSelecionada2 != null){
        verificarCarta();
    }
}

//função para desvirar as cartas (se forem diferentes)
function desvirarCarta(){
    for(let i=0; i<2; i++){
        let c1geral = document.querySelector(".selecionada");
        c1geral.classList.remove("virada")
        c1geral.querySelector(".verso").classList.remove("escondido");
        c1geral.querySelector(".frente").classList.add("escondido");
        c1geral.classList.remove("selecionada");
    }
}

//função para manter as cartas (se forem iguais)
function manterCarta(){
    for(let i=0; i<2; i++){
        let c1geral = document.querySelector(".selecionada");
        c1geral.classList.remove("selecionada");
    }
}


// função para verificar se as duas cartas selecionadas são iguais

function verificarCarta(){
    if(cartaSelecionada1 === cartaSelecionada2){
        manterCarta();
        contViradas = contViradas + 2;
        contJogadas = contJogadas + 1;
    } else {
        setTimeout(desvirarCarta, 1000);
        contJogadas = contJogadas + 1;
    }
    cartaSelecionada1 = null;
    cartaSelecionada2 = null;

    setTimeout(verificarFim, 500);
}

// avaliar se todas as cartas já foram viradas

function verificarFim(){
    console.log(contJogadas);
    console.log(contViradas);
    if(contViradas == num){
        alert(`PARABÉNS! Você ganhou em ${contJogadas} jogadas!`)
        let jogarNov = prompt("Deseja jogar novamente?");
        if(jogarNov==="sim"){
            document.location.reload(true);
        } else if(jogarNov==="não"){
            alert("Obrigado por jogar conosco!")
        } else {
            alert
        }
    }
}
