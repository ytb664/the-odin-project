const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement('p');
para.classList.add('para');
para.textContent = 'Hey I\'m red!';
para.style.color = 'red';

container.appendChild(content);
container.appendChild(para);