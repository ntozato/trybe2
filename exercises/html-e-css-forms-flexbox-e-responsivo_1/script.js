//adiciona tag <option> estados

var states = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Outro'];
var select = document.getElementById('estados');

for (let i = 0; i < states.length; i++) {
    let options = document.createElement('option');
    options.value = states[i];
    options.innerHTML = states[i];
    select.appendChild(options);
}