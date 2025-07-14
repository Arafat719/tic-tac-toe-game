const parah = document.querySelectorAll('.box p');
const boxes = document.querySelectorAll('.box');


const button = document.querySelector('button');

const winner = document.querySelector('.winner p');
const winnerBox = document.querySelector('.winner');
function updateText(newText) {
    const div = document.getElementById('myDiv');
    div.innerText = newText;
    // Force reflow to recalculate size
    div.style.width = "auto"; // auto width to fit content
}
let count = 0;


boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (parah[index].innerText !== '') {
            return;
        }

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
        if (parah[0].innerText === parah[1].innerText && parah[1].innerText === parah[2].innerText && parah[0].innerText !== '') {
            updateText(`the winner is ${parah[index].innerText}`);
            console.log(`the winner is ${parah[index].innerText}`)
        } else if (parah[3].innerText === parah[4].innerText && parah[4].innerText === parah[5].innerText && parah[3].innerText !== '') {
            updateText(`the winner is ${parah[index].innerText}`);
            console.log(`the winner is ${parah[index].innerText}`)
        } else if (parah[6].innerText === parah[7].innerText && parah[7].innerText === parah[8].innerText && parah[6].innerText !== '') {
            updateText(`the winner is ${parah[index].innerText}`);
            console.log(`the winner is ${parah[index].innerText}`)
        } else if (parah[0].innerText === parah[3].innerText && parah[3].innerText === parah[6].innerText && parah[0].innerText !== '') {
            updateText(`the winner is ${parah[index].innerText}`);
            console.log(`the winner is ${parah[index].innerText}`)
        } else if (parah[1].innerText === parah[4].innerText && parah[4].innerText === parah[7].innerText && parah[1].innerText !== '') {
            updateText(`the winner is ${parah[index].innerText}`);
            console.log(`the winner is ${parah[index].innerText}`)
        } else if (parah[2].innerText === parah[5].innerText && parah[5].innerText === parah[8].innerText && parah[2].innerText !== '') {
            updateText(`the winner is ${parah[index].innerText}`);
            console.log(`the winner is ${parah[index].innerText}`)
        } else if (parah[0].innerText === parah[4].innerText && parah[4].innerText === parah[8].innerText && parah[0].innerText !== '') {
            updateText(`the winner is ${parah[index].innerText}`);
            console.log(`the winner is ${parah[index].innerText}`)
        } else if (parah[2].innerText === parah[4].innerText && parah[4].innerText === parah[6].innerText && parah[2].innerText !== '') {
            updateText(`the winner is ${parah[index].innerText}`);
            console.log(`the winner is ${parah[index].innerText}`)
        }
    });
});

button.addEventListener('click', () => {
    location.reload();
})