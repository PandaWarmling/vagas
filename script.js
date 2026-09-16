//atribuiçao
let meunome="Luiz";

//redeclaração
meunome="luiz henrique"

let idade = 28;
const deMaior = false;
const mensagem = `Meu nome é ${meunome} e tenho ${idade} anos`;

//atribuiçao objeto
const usuario={
    nome:"jose",
    idade:35
};

console.log(usuario.idade)

//redeclaraçao objeto
usuario.idade=36;



console.log(usuario.idade);
console.log(usuario);
console.log(mensagem);

//const frutas=["maça", "banana","morango"];
//console.log(frutas);
//console.log(frutas[1]);

if (idade>=18){
    console.log("maior de idade")}
else {
    console.log("menor de idade,vai pra casa!")
}
let validaidade = (idade>=18) ? 'maior': 'menor';
console.log(validaidade)

let statusSemaforo = 'vermelho';
switch(statusSemaforo){
    case 'vermelho':
        console.log('pare!')
        break
    case 'verde':
        console.log('Siga!')
        break
    default:
        console.log('Aguarde!')
}

let contador = 0;
while (contador < 3){
    console.log(`O contador é: ${contador}`);
    contador++;
}

for (let i =0; i<5; i++){
    console.log(`O valor de i é ${i}`)
}

const frutas = ["maça","tomate","banana", "morango","uva"];
for (const fruta of frutas){
    if (fruta=="tomate"){
        continue;
    }
    console.log(fruta);
}

function somar (a,b){
    return a+b;
}

 function CNH(idade){
    if (idade >= 18){
        return "Maior, pode ser preso";
    }
    return "menor de idade";
 }

 const multiplicar = function (a,b){
    return a*b;
 }
 console.log(multiplicar(5,3));

 const dividir = (a,b) => a/b;
 const multi = (a,b) => a*b; 