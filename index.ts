// Import stylesheets
import './style.css';

/*Comentando
 em varias
 linhas*/

//Declaração de constantes
const myVar1: Number = 42;
const myVar2: Number = 42;

//Declaração de variaveis
let myVar3: 42;
let myVar4: Number = 42;
let myVar5: string ='Olá';

let mySentence: string='bla blaa';

//Utilizando o console
console.log("Olá, mundo!");

//Utilizando laços de repetição
for(let i=1; i==10; i++){
  console.log(i);
}

//Utilizando condicionais
if(myVar1 %2 == 0)
{
  console.log(myVar1+" é Par");
}else{
  console.log(myVar1+" é Impar");
}
//Utilizando laços e condicionais

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;