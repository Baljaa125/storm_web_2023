var headerElement = document.createElement('header');
var h1 = document.createElement('h1');
headerElement.appendChild(h1);
document.body.appendChild(headerElement);
h1.innerHTML = "Welcome to My Website";

var mainElement = document.createElement('main');
var pElement = document.createElement('p');
document.body.appendChild(mainElement);
mainElement.appendChild(pElement);
pElement.innerHTML = 'This is a small website created using HTML and Javascript.';

var footerElement = document.createElement('footer');
var pElementFooter = document.createElement('p');
footerElement.appendChild(pElementFooter);
document.body.appendChild(footerElement);
pElementFooter.innerHTML = '&copy; 2023 Baljinnyam'; 

