const parah = document.querySelectorAll('.box p');
const boxes = document.querySelectorAll('.box');

const button = document.querySelector('button');

let count = 0;

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        count++;
        if(count === 1 || count === 3 || count === 5 || count === 7 || count === 9) {
            parah[index].innerText = 'O';
            parah[index].style.color = 'green';
            console.log(index);
        }else if(count === 2 || count === 4 || count === 6 || count === 8) {
            parah[index].innerText = 'X';
            parah[index].style.color = 'blue';
            console.log(index);
        }
    })
})
button.addEventListener('click', () => {
    location.reload();
})

