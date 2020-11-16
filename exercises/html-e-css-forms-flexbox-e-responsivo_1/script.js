//adiciona tag <option> estados

var states = ['sao paulo', 'rio de janeiro', 'minas gerais', 'bahia'];
var select = document.getElementById('estados');

for (let i = 0; i < states.length; i++) {
    let options = document.createElement('option');
    options.value = states[i];
    options.innerHTML = states[i];
    select.appendChild(options);
}