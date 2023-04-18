// 自動生成答案
let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);

const guessInput = document.querySelector(".input-guess");
const guessBtn = document.querySelector("#guess-btn");
const range = document.querySelector("#range");
const message = document.querySelector("#message");

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
    } else if (guess > min && guess < answer) {
        min = guess;
        range.textContent = min + "-" + max;
        message.textContent = "太小";
        guessInput.valueAsNumber = null;
    } else if (guess == answer) {
        range.textContent = "恭喜答對"
        message.textContent = "答案是" + answer;
    }
    else {
        message.textContent = "請輸入" + min + "-" + max + "的數字";
        guessInput.valueAsNumber = null;
    }

});
