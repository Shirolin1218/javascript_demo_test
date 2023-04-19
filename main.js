// 自動生成答案
let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);

const guessInput = document.querySelector(".input-guess");
const guessBtn = document.querySelector("#guess-btn");
const range = document.querySelector("#range");
const message = document.querySelector("#message");
let restartBtn = document.querySelector("#restart-btn");

restartBtn.style.display = "none";
let max = 100;
let min = 1;
guessBtn.addEventListener("click", function () {
    console.log("click");
    let guess = guessInput.valueAsNumber;
    if (guess < max && guess > answer) {
        max = guess;
        range.textContent = min + "-" + max;
        message.textContent = "太大";
        guessInput.valueAsNumber = null;
        return;
    } else if (guess > min && guess < answer) {
        min = guess;
        range.textContent = min + "-" + max;
        message.textContent = "太小";
        guessInput.valueAsNumber = null;
        return;
    } else if (guess == answer) {
        range.textContent = "恭喜答對"
        message.textContent = "答案是" + answer;
        guessBtn.textContent = "猜數字結束";
        guessBtn.disabled = true;
        guessInput.disabled = true;
        restartBtn.style.display = "block";
        return;
    }
    else {
        message.textContent = "請輸入" + min + "-" + max + "的數字";
        guessInput.valueAsNumber = null;
    }

});

restartBtn.addEventListener("click", function () {
    console.log("restart");
    answer = Math.floor(Math.random() * 100) + 1;
    console.log(answer);
    restartBtn.style.display = "none";
    guessBtn.disabled = false;
    guessInput.disabled = false;
    guessInput.valueAsNumber = null;
    min=1;
    max=100;
    range.textContent = min + "-" + max;
    message.textContent = "按下按鈕開始猜吧";
    guessBtn.textContent = "猜";
});
