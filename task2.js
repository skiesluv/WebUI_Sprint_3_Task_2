const h1style = document.querySelector('h1');

const pStyle = document.querySelectorAll('p');

const liststyle = document.getElementById('myList');

const liStyle = document.querySelectorAll('li');

const spanInvStyle = document.querySelector('span');

h1style.style.cssText = 'background: #14f786; width: 25%;';

pStyle[0].style.cssText = 'font-weight: bold;';

pStyle[1].style.cssText = 'color: red;';

pStyle[2].style.cssText = 'text-decoration: underline;';

pStyle[3].style.cssText = 'font-style: italic;';

liststyle.style.cssText = 'list-style: none; display: flex; flex-direction: row;';

spanInvStyle.style.cssText = 'font-size: 0px;';