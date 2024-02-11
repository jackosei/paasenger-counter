let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let clearEl = document.getElementById("clear-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    if (count != 0) {
        count -= 1
    }
    countEl.textContent = count
}

function save() {
    if (count != 0) {
        let countStr = count + " - "
        saveEl.textContent += countStr
        countEl.textContent = 0
        count = 0
        if (window.getComputedStyle(clearEl).display === "none") {
            clearEl.style.display = "block";
        }
    }
}

clearEl.onclick = function clear() {
    saveEl.textContent = "Previous entries: "
    clearEl.style.display = "none";
}