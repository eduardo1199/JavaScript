//document.getElementById() pega o elemnento da dom a partir do ID dele
//document.getElementsByClassName() pega um ou mais elementos a partir de um nome de classe
//document.getElementsByTagName() pegab um elemento a partir da sua tag, um ou mais elementos(Html Collection)
// document.querySelector() pega um elemento a partir do seu referente, igual o css, seja de uma classe ou id
//document.querySelectorAll() pega todos os elementos a partir do seu referente, igual o css.(NodeList)
let submitTextarea = () => {
    let titleValue = document.querySelector("#title-textarea");
    let textareaValue = document.querySelector("#textareaInput");

    console.log(titleValue.textContent); //textContent pega o valor do elemento de tag escrita
    console.log(textareaValue.value); // pega o texto do elemento textarea ou input contindo no elemento da Dom 


    let insertHTML = document.querySelector("#insertHtml"); 
    insertHTML.innerHTML = `<h2>${textareaValue.value}</h2>` //inserir elemento html dentro da pagina // inserindo valor do 

}