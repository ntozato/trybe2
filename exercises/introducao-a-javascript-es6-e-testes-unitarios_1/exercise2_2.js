const array = "Antônio foi no banheiro e não sabemos o que aconteceu";


function returnLongestWord() {
    let split = array.split(' ');
    let maior = 0;
    let result = ''

    for (let i = 0; i < split.length; i++) {
        if (split[i].length > maior) {
            maior = split[i];
            result = maior;
        }

        return result;

    }
   
}
console.log(returnLongestWord());


