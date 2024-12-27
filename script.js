let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');

const field = document.querySelector('.field');
const ball = document.querySelector('.ball');
const racket1 = document.querySelector('.racket1');
const racket2 = document.querySelector('.racket2');

let player1Score = document.querySelector('.player1-score');
let player2Score = document.querySelector('.player2-score');


// ВВОД ИМЕН ИГРОКОВ
let player1Name = prompt('Введите имя первого игрока');
let player2Name = prompt('Введите имя второго игрока');
player1.innerHTML = player1Name;
player2.innerHTML = player2Name;

// ПРИВЯЗКА КНОПОК
let up1 = document.querySelector('.up1');
let down1 = document.querySelector('.down1');
let up2 = document.querySelector('.up2');
let down2 = document.querySelector('.down2');