const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement('p');
para.classList.add('para');
para.textContent = 'Hey I\'m red!';
para.style.color = 'red';

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "I\'m a blue h3!";
h3.style.color = 'blue';

container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);