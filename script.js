const imagens = [`img\bobrossparrot.gif`,`img\explodyparrot.gif`]

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

let carta = `<li class="carta">
<div class="carta-frente">
    <img src="./img/front.png">
</div>
<div class="carta-virada">
</div>
</li>`

const ul = document.querySelector("ul");

for(let i=0;i<num;i++){
    ul.innerHTML += carta;
}


