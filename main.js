// Document Objects
// console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 'DOM'
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[9]);
document.all[9].textContent = 'hello';


console.log(document.forms);
console.log(document.links);