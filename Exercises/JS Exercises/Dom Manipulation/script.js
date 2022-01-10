// your javascript file
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const content1 = document.createElement('p');
content1.classList.add('redContent');
content1.textContent = 'Hey! I\'m Red!';
content1.style.color = 'red';
container.appendChild(content1);

const content2 = document.createElement('h3');
content2.classList.add('blueh3');
content2.textContent = 'Hey! I\'m a blue h3';
content2.style.color = 'blue';
container.appendChild(content2);
''
const content3 = document.createElement('div');
content3.classList.add('bordered')
content3.style.backgroundColor = 'pink';
content3.style.border = 'black';
const header1 = document.createElement('h1');
header1.textContent = 'I\'m in a div!';
content3.appendChild(header1);
const paragraph = document.createElement('p');
paragraph.textContent = 'ME TOO!';
content3.appendChild(paragraph);
container.appendChild(content3);

