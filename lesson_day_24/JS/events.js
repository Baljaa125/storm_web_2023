console.log('JS Lesson Day 24 - JS events');


const paint = function (element) {
    console.log(element);
    element.style.color = 'red';
}

// content гэдэг id-тай элементэд
// ul элемент оруулна
// түүний хүүхдүүд нь li элемент байна
// хэрвээ хүүхдүүд дээр нь дарвал 
// random өнгөнүүдээр өнгөө өөрчилнө.

const colors = 
[ 'red',
'blue',
'orange',
'pink',
'yellow',
'green'
];
console.log(colors[0]); //red
const paintElement = (elEvent) => {
    let randomIndex = Math.floor(Math.random()*colors.length);
    console.log(elEvent);
    elEvent.target.style.color = colors[randomIndex];
}
//create ul element
let ulElement = document.createElement('ul');

for (let i = 0; i < 3; i++) {
    let liElement = document.createElement('li');
    liElement.addEventListener('click', paintElement);
    liElement.innerHTML = 'Element - ' + i;
    ulElement.appendChild(liElement);
}

// add to the content element
let contentElement = document.getElementById('content');
contentElement.appendChidl(ulElement);