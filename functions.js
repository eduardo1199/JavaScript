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

//console.log(functionSelectTypePessoas("includes"));
//console.log(pessoas.splice())

