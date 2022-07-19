let nome
let idade
console.log(typeof nome)
console.log(typeof idade)

/* Como não foi declarado nenhum valor inicial, o JS reconhece estes valores como indefinidos até então.*/

nome = prompt('Qual o seu nome?')
idade = prompt('Qual a sua idade?')

console.log(typeof nome)
console.log(typeof idade)

/* Como estamos recebendo o valor de cada variável via prompt, em ambos os casos os valores recebidos são do tipo string.*/

console.log('Olá', nome, 'você tem', idade, 'anos!')
