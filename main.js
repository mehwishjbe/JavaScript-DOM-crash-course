// Document Objects
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'DOM'
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[9]);
// document.all[9].textContent = 'hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);




/* getElementById */
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'bye bye';
// headerTitle.innerHTML = '<h3>Ciao</h3>';

// var headerTitle = document.getElementById('header-title');
// headerTitle.style.borderBottom = 'solid 3px white'

// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px darkgreen'




/* getElementsByClassName */
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].innerText = 'Item Ciao'
// items[1].style.color = 'red'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

// for(let i = 0; i<items.length; i++){
//     items[i].style.backgroundColor = 'gray'
// }




/* getElementsByTagName */
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].innerText = 'Item Ciao'
// li[1].style.color = 'red'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'

// for(let i = 0; i<li.length; i++){
//     li[i].style.backgroundColor = 'gray';
// }




/* Query Selector */
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 3px red';

// var input = document.querySelector('input');
// input.value = 'Bella Ciao';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'pink';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';




/* Query Selector All*/
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Bella Ciao';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(let i = 0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'lightgray'; 
//     even[i].style.backgroundColor = 'gray'; 
// }




/* PARENT NODE */
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'lightgray';
// console.log(itemList.parentNode.parentNode.parentNode);




/* PARENT ELEMENT */
// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'lightgray';
// console.log(itemList.parentElement.parentElement.parentElement);




/* CHILD NODE */
// var itemList = document.querySelector('#items');
// // console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Nihao';

// // LastChild
// console.log(itemList.lastChild);
// // LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Wallah';





/* next sibling */
// var itemList = document.querySelector('#items');
// console.log(itemList.nextSibling);
// // next sibling element
// console.log(itemList.nextElementSibling);

/* previous sibling */
// var itemList = document.querySelector('#items');
// console.log(itemList.previousSibling);
// // previous sibling Element
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green'; 





/* CREATE ELEMENT */
// // creating div
// var newDiv = document.createElement('div');
// // setting div's class name
// newDiv.className = 'hello';
// // setting div's id name
// newDiv.id = 'hello-id';
// // setting div's attribute
// newDiv.setAttribute('title','title div');
// // creating text for div
// var newDivtext = document.createTextNode('hello world');
// // creating text for div
// newDiv.appendChild(newDivtext);
// // adding this div to DOM
// var containero = document.querySelector('header .container-');
// var h1 = document.querySelector('header h1' );
// containero.insertBefore(newDiv, h1)

// newDiv.style.fontSize = '15px'
// // console.log(newDiv);




/* EVENT LISTENERS */
/* var button = document.getElementById('button').addEventListener
('click', function(){
    console.log(123);
}); */

/* var button = document.getElementById('button').addEventListener
('click', onClick); */

/* function onClick(){
    console.log('Button Clicked');
    document.getElementById('button').textContent = 'Changed';
} */

/* function onClick(e){
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);

    // console.log(e.type);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
    
} */

/* var buttonbtn = document.getElementById('buttonbtn');
buttonbtn.addEventListener('click', onClicksubmit); */

/* function onClicksubmit(){
    console.log('Button Clicked');
    buttonbtn.textContent = 'Submitted';

    buttonbtn.disabled = true;

    setTimeout(function(){
        buttonbtn.disabled = false;
    }, 0.001);
} */

var button = document.getElementById('button');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);

function runEvent(e){
    console.log('Event type:' + e.type);
    
}