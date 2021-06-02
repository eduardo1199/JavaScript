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
 
let pessoas = [
    {
        name: "Eduardo Soares",
        age:21,
        stars: 1452.62,
        isSubscribed: true
    },
    {
        name:"Guilherme Soares",
        age:15,
        stars:51485,
        isSubscribed:true
    },
    {
        name:"Andreza Soares",
        age:24,
        stars:1000,
        isSubscribed:false
    },
    {
        name:"Andrea Soares",
        age:40,
        stars:454,
        isSubscribed:false
    },
    {
        name:"Fernanda Campos",
        age:21,
        stars:48478,
        isSubscribed:true
    },
]
let functionSelectTypePessoas = (type) =>{
    let selectPessoas = [];
    if(type == "age"){
        pessoas.forEach((element,index) => {
            if(element.age <= 20) {
                selectPessoas.push(element)
            }
        })
        return selectPessoas;
    }
    if(type == "stars"){
        pessoas.forEach(element => {
            if(element.stars <= 5000) selectPessoas.push(element)
        })
        return selectPessoas;
    }
    if(type == "includes"){
        pessoas.forEach(element => {
            if(element.name.includes("Soares")) selectPessoas.push(element)
        })
        return selectPessoas;
    }
}
let functionRemoveElement = (name, pessoas) =>{
    let index = undefined;
    pessoas.forEach(element => {
        if(element.name == name){
            index = pessoas.indexOf(element);
            pessoas.splice(index, 1);
        }
    });
    
    let boolean = pessoas.lenght > 0 ? `${pessoas}` : `${false}`
}

/* let boolean = pessoas.lenght > 0 ? `${pessoas}` : `${false}` 
    boolean = o tamanho do arrya de pessoas é maior que zaro ? se sim, boolean = pessoas, se não...boolean = false
*/
//console.log(functionSelectTypePessoas("includes"));
//console.log(pessoas.splice())
//console.log(functionRemoveElement("Andreza Soares", pessoas));

//Operador delete tem função de deletar um propriedade de um objeto.
//New serve para criar um novo objeto

let maiorDeIdade = (User) =>{
    let maior = User >= 18 ?  true : false; // usuario é maior que 18 ? se sim return true se não false
    return maior;
}

let functionError = (User) => {
    if(User == ""){
        throw new Error("ERRO, NOME VAZIO") //lançar erro na função caso o nome venha vazio
    }
    return console.log(User);
}

/* try{
    functionError(""); //executar função
}catch(e){ // catch captura o erro lançado pela função
 console.log(e);
} */
/* 
for(let element of elementos){ o for of percorre o que possue nesse elemento, seja um array ou string.
    console.log(element)
} */
/* 
for(let property in pessoas){ o for in percorre as propriedades de objeto
    console.log(property)
} */

let conversionNotaByCaractere = (nota) => {
    if(nota >= 90 && nota <= 100){
        return "A";
    }
    if(nota >= 80 && nota <= 89){
        return "B";
    }
    if(nota >= 70 && nota <= 79){
        return "C";
    }
    if(nota >= 60 && nota <= 69){
        return "D";
    }
    return "F";
}

const biblioteca = [
    {
        categoria:"Livros infantis",
        books:[
            {
                name:"Bela adormecida",
            },
            {
                name:"Bruxa"
            },
            {
                name:"Cinderela"
            }
        ]
    },
    {
        categoria:"Livros de terror",
        books:[
            {
                name:"O espantalho"
            },
            {
                name:"A floresta"
            },
            {
                name:"Bela"
            }
        ]
    }
]

let contarNumeroDeCatergorias = (biblioteca) => {
    console.log(biblioteca);
}
//console.log(conversionNotaByCaractere(nota));

let qtn_categorias = contarNumeroDeCatergorias(biblioteca);
console.log(qtn_categorias);