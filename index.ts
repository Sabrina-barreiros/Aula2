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
let counter = 0;
let intervalId = setInterval(() =>{
  counter += 1;
  const counterDiv: HTMLElement= document.getElementById('counterDiv');
  counterDiv.innerHTML = 'Contador:' +counter;
}
,1000);

let title: string = 'Olá, mundo!';
let paragraph: string = 'Bla bla';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${title}</h1>
<p>${paragraph}</p>
<div id='counterDiv'>}</div>`;