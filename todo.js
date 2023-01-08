const inputText = document.getElementById('add');
inputText.addEventListener('keypress', printTask);

const inputValue = document.getElementById('ipVal');
inputValue.addEventListener('click', () => inputValue.remove())


const arr = [];

function printTask(event) {
    if(event.keyCode == 13) {
        const val = inputText.value;
        arr.push(val);
        console.log(arr);
        prTask.innerHTML += `<div id="ipVal">${val}</div>`;
        inputText.value = "";
    }
}