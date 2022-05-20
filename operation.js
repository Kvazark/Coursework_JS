/*function operatioccn(){
    let text = document.getElementById('name').value;
    let p = document.createElement("author");
    p.appendChild(document.createTextNode(text));
    document.getElementById("items").appendChild(p);

    document.getElementById('author').value = '';
}
function addItem() {
    let menu = document.getElementById('menu');
    let newItemText = document.getElementById('newItemText').value;
    let newItemValue = document.getElementById('newItemValue').value;

    let option = document.createElement('option')
    option.value = newItemValue
    option.innerText = newItemText
    menu.appendChild(option)
}*/
/*function buttonCreate(){
    var content_title = document.getElementById("content_menu").value;
    

    if(title == ""){
        alert("Введите заголовок.");
    }else{
        var h1 = document.createElement("h1");
        h1.innerHTML=title;
        
        var article = document.getElementById("recordings");
        article.appendChild(h1);
        content_title.value ="";
    }
}*/
/*window.onload = init;
function init(){
    var createButton = document.getElementById("crbutton");
    createButton.onclick=buttonAdd;
}


function buttonAdd(){
    var title = document.getElementById("newTitle");
    var contentTitle = title.value;

    if(contentTitle = ""){
        alert("Введите данные")
    }else{
        var h1 = document.createElement("h1");
        h1.innerHTML = contentTitle;
        var x = document.getElementById("recordings");
        x.appendChild(h1);
        title.value="";
    }



let block = document.getElementsByTagName('div')[0];
    title = block.children;
    parentElement.insertBefore(newElement, referenceElement)
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    document.getElementById("archiveList").appendChild(li);    
}*/

function d(){
    let element = document.querySelector('archive_button').textContent;
    
}

function addItem(){

    

    let content_title = document.getElementById('input-title').value;
    let author = document.getElementById('input-author').value;
    let newCategory = document.getElementById('input-category').value;
    let content = document.getElementById('input-content').value;

    if ((content_title === '') || (author ==='') ||(newCategory==='')||(content==='')){
        alert('Заполните все поля.');
    } else {
        let article =document.createElement("article");
        article.innerHTML += `<h1>${content_title}</h1>
        <p>Категория: `+`<strong>${newCategory}</strong></p>
        <p>Автор: `+`<strong>${author}</strong></p>
        <p>${content}</p>
        <button class ="delete_button" onclick="this.parentNode.parentNode.removeChild(this.parentNode);"  type="submit">Удалить</button>
        <button class ="archive_button" onclick="addArchive(this)" type="submit">Архив</button>`;

        document.getElementById('input-author').value ='';
        document.getElementById('input-title').value =''; //
        document.getElementById('input-category').value =''; 
        document.getElementById('input-content').value =''; 

        document.getElementById('article').appendChild(article); 
    }

    
    
}


function addArchive(element){
    let parent = element.closest("article");    
    let title = parent.querySelector("h1").textContent;

    console.log('d');

    let li = document.createElement("li");  
    li.appendChild(document.createTextNode(title));
    let ul = document.getElementById("archiveList").appendChild(li);

    element.parentNode.parentNode.removeChild(element.parentNode);          
}

