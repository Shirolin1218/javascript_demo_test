
const guessInput = document.querySelector(".input-guess");
const guessBtn = document.querySelector("#guess-btn");
const range = document.querySelector("#range");
const message = document.querySelector("#message");
let restartBtn = document.querySelector("#restart-btn");


let answer = Math.floor(Math.random() * 100) + 1;// 自動生成答案
console.log(answer);
let max = 100;
let min = 1;

// 猜答案按鈕事件
guessBtn.addEventListener("click", function () {
    console.log("click");
    let guess = guessInput.valueAsNumber;
    if (guess % 1 != 0) {
        message.textContent = "請輸入整數";
        guessInput.value = null;
        return;
    }
    if (guess === answer) {
        range.textContent = "恭喜答對"
        message.textContent = "答案是" + answer;
        guessBtn.textContent = "猜數字結束";
        guessBtn.disabled = true;
        guessInput.disabled = true;
        restartBtn.style.display = "block";
        return;
    }
    if (guess <= max && guess >= answer) {
        max = guess - 1;
        range.textContent = min + "-" + max;
        message.textContent = "太大";
        guessInput.value = null;
        return;
    }
    if (guess >= min && guess <= answer) {
        min = guess + 1;
        range.textContent = min + "-" + max;
        message.textContent = "太小";
        guessInput.value = null;
        return;
    }


    else {
        message.textContent = "請輸入" + min + "-" + max + "的數字";
        guessInput.value = null;
    }

});

// 重新開始按鈕事件
restartBtn.addEventListener("click", function () {
    console.log("restart");
    answer = Math.floor(Math.random() * 100) + 1;
    console.log(answer);
    restartBtn.style.display = "none";
    guessBtn.disabled = false;
    guessInput.disabled = false;
    guessInput.value = null;
    min = 1;
    max = 100;
    range.textContent = min + "-" + max;
    message.textContent = "按下按鈕開始猜吧";
    guessBtn.textContent = "猜";
});
