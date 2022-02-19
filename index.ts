// Import stylesheets
import {Greeter} from './greeter';
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

//DEclarando arrays
let list: Number[] = [21, 2, 65, 55, 10, 98, 3, 9, 80, 42];

//Utilizando laços de repetição
console.log("Laço");
for(let i=1; i<10; i++){
  console.log(i);
  console.log(list[i]);
}

//Utilizando condicionais
if(myVar1 %2 == 0)
{
  console.log(myVar1+" é Par");
}else{
  console.log(myVar1+" é Impar");
}

//Utilizando laços e condicionais
for(let i=1; i<=10; i++){
  if (i%2 == 0){
    console.log(i);
  }
}

//DEclarando tipos enumerados
enum Color {Red, Green, Blue};
let c : Color = Color.Green;

enum ColorWithReferences {Red=1, Green=2, Blue=3};
let c2: ColorWithReferences = ColorWithReferences.Green;

//DEclarando any 
let notSure: any = 42;
notSure = "Maybe a string instead";
notSure = false; //DEfinitivamente é booleano

function aviso(): void{
  console.log('MEnsagem de alerta!');
}
aviso();

//Declarando funções
function soma(n1: number, n2: number ): Number{
  return n1+n2;
}
console.log(soma(21,21));
console.log(soma(1,2));

function getFullName(pessoa: {name: string, lastName: string}):
string{return pessoa.name + "" + pessoa.lastName;
}
let p ={name: "Sabrina", lastName: " Barreiros"};
console.log(getFullName(p));



//Implementando um contador
let counter = 0;
let intervalId = setInterval(() =>{
  counter += 1;
  const counterDiv: HTMLElement= document.getElementById('counterDiv');
  counterDiv.innerHTML = 'Contador:' +counter;
}
,1000);

//utilizando classe externa
let saudacao = new Greeter ("Mundo");

let title: string = 'Olá, mundo!';
let paragraph: string = 'Bla bla';


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${title}</h1>
<p>${paragraph}</p>
<div id='counterDiv'>}</div><br>
<button id='appButton' onclick="alertTsMethod()">Alertar</button>
<div>${saudacao.getGreeting()}</div>`;

//DEclarando uma função para ser invocada por um evento
const btn = document.getElementById("appButton");
btn?.addEventListener("click'", alertTsMethod);function alertTsMethod(this: HTMLElement, ev: Event){
  alert("Alertando usando TypeScript");
}