// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

// const btn2 = document.querySelector('#btn2');
// // btn2.addEventListener('click', () => {
// //     alert("Hello World");
// // });
// btn2.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
// })

const button = document.querySelectorAll('button');

button.forEach((button) => {

    button.addEventListener('click', () => {
        alert(button.id);
    });
});