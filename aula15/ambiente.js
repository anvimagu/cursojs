let num = [5, 8, 2, 9, 3 ]
num[5]=6 //Adiciona mais um elemento
num.push(7)//Adiciona mais um elemento
num.sort()// Deixa os vetor em ordem 
num.push(1) // Adiciona mais um elemento mas não entra na ordem pois está abaixo do sort
console.log (`Nosso vetor é o ${num}`)// Mostra o vetor
console.log (`O vetor tem ${num.length} posições`)// Mostra a quantidade de valores
console.log (`O primeiro valor do vetor é ${num[0]}`)// Mostra o primeiro valor
//let pos = num.indexOf(8)
//console.log(`O valor 8 está na posição ${pos}`)
let pos = num.indexOf(4) //Busca um valor dentro do vetor
if (pos == -1) { //Quando não tem o valor no vetor o JS retorna o resultado como -1
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor está na posição ${pos}`) //Quando tem o valor ele mostra a posição
}

