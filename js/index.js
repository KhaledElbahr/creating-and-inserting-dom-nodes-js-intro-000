//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('div');

element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';

document.body.appendChild(element);
element.style.textAlign = 'center';


var ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);

ul.style.textAlign = 'left';

ul.removeChild(ul.querySelector('li:nth-child(2)'));
