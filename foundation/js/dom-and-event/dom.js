const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.toggle('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement('p');
para.classList.toggle('para');
para.textContent = 'Hey I\'m red!';
para.style.color = 'red';

const h3 = document.createElement('h3');
h3.classList.toggle('h3');
h3.textContent = "I\'m a blue h3!";
h3.style.color = 'blue';

const newContainer = document.createElement('div');
newContainer.classList.toggle('newContainer');
newContainer.setAttribute('id', 'newContainer');
newContainer.style.backgroundColor = 'pink';
newContainer.style.border = '5px solid black';

const title = document.createElement('h1');
title.classList.toggle('h1');
title.textContent = 'I\m in a div';

const newPara = document.createElement('p');
newPara.classList.toggle('newPara');
newPara.textContent = 'ME TOO!';

newContainer.appendChild(title);
newContainer.appendChild(newPara);

container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);
container.appendChild(newContainer);