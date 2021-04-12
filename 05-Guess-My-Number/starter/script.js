'use strict';

let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
        //Get value from input
        let guess = Number(document.querySelector('.guess').value);
        let messageView = document.querySelector('.message');

        if (guess !== secretNumber) {
            //guess is either too high or too  low
            guess < secretNumber ? messageView.textContent = "Too Low!" : messageView.textContent = "Too High!";
            score--;
            document.querySelector('.score').textContent = score;
            return;
        }

        messageView.textContent = "Congratulations! You guessed correct."
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        let highScore = document.querySelector('.highscore');
        let highScoreVal = highScore.textContent;
        if (highScoreVal < score) highScore.textContent = score;
        return;
});

document.querySelector('.again').addEventListener('click', function () {
    //hide score view
    document.querySelector('.number').textContent = '?';
    //clear input
    document.querySelector('.guess').value = '';
    //reset views to defaults
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '0';
    score = 20;
    secretNumber = Math.trunc((Math.random() * 20) + 1);
    //reset styles
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
