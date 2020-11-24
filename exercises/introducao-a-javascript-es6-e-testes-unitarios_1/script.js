let clickCount = 0;
let textToDisplay = document.getElementById('text');
const button = document.getElementById('btn');
button.addEventListener('click', () => textToDisplay.innerHTML = clickCount += 1);


