// toFixed() recebe como argumento para definir os numeros de casas
//replace() recebe como primeiro parametro o que voce quer trocar e segundo pelo o que voce quer trocar
//split() recebe como argumento onde separar a frase
//join() inserir algo nos espaços da frase
//includes() verificar se existe uma palavra na frase
//Array.from() recebe como argumento uma string e coloca cada elemento em um array
//.push() adicionar elemento no array
//.unshift colocar elemento no inicio do array
//.pop remover um item no final do array
//.shift remover um item no inicio do array
//.slice(a, b) remover um item do array sendo a o elemento de remoção e b ate onde o array vai
//.splice(a, b) remover um item do array sendo a e b índices do elemento de remoção
//.indexOf() recebe como parametro um elemento que voce quer e pega o índice dele dentro do array.
 
let dado = {
    name: "Eduardo Soares",
    age:21,
    stars: 1452.62,
    isSubscribed: true
}
const dados = [dado];


let printDate = (dados) => {
    console.log(dados.name);
    console.log(dados.age);
    console.log(dados.stars);
    console.log(dados.isSubscribed);
}
let oursPrintDate = function(dados){
    console.log(dados.name);
    console.log(dados.age);
    console.log(dados.stars);
    console.log(dados.isSubscribed);
}

printDate(dado);
oursPrintDate(dado);
dados.push(dado);
console.log(dados);