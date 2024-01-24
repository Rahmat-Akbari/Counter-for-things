let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let sumResultEl = document.getElementById("sumResult");
let count = 0;
let saveValues = [];

function increment() {
    count += 1;
    countEl.textContent = count;
}

function decrement() {
    if (count > 0) {
        count -= 1;
        countEl.textContent = count;
    }
}

function save() {
    if (count > 0){  //only saves greater than 0
        let countValue = count;
        saveValues.push(countValue); // Save the count value in the array
        let countStr = countValue + " - ";
        saveEl.textContent += countStr;
        countEl.textContent = 0;
        count = 0;
    }
}

function reset() {
    countEl.textContent = 0;
    count = 0;
    saveEl.textContent = "Previous entries: ";
    sumResultEl.innerText = "Sum: ";
    saveValues = []; // Reset the array when resetting
}

function sumAllSaved() {
    const sum = saveValues.reduce((acc, val) => acc + val, 0); // Calculate the sum easily
    sumResultEl.innerText = `Sum: ${sum}`;
}
