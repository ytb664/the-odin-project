const body = document.querySelector('body');
const btn = document.createElement('button');
const img = document.querySelector('img');

btn.textContent = "Click to delete image";
body.appendChild(btn);

btn.addEventListener('click', () => {
    body.removeChild(img);
})