var todos = JSON.parse(localStorage.getItem('list-todos')) || [];
var lista = document.querySelector('ul#lista');

function listarTodos(){
    lista.innerHTML = "";
    for(i=0; i< todos.length; ++i){
        var listElement = document.createElement('li');
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#')
        var linkText = document.createTextNode('Excluir');

        var pos = todos.indexOf(i);
        linkElement.setAttribute('onclick', 'deletarTodo(' + pos + ')');

        linkElement.appendChild(linkText);
        listElement.innerHTML = todos[i];

        lista.appendChild(listElement);
        lista.appendChild(linkElement);
    }          
}

listarTodos()

function criarTodo(){
    var nome  = document.querySelector('input#nome');
    todos.push(nome.value);
    nome.value = "";
    listarTodos();
    saveToStorage();
}    

function deletarTodo(pos){
    todos.splice(0,1);
    listarTodos();
    saveToStorage();
}

function saveToStorage(){
	localStorage.setItem('list-todos', JSON.stringify(todos));
}