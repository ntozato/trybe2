let numbers = [5,9,3,19,70,8,100,2,35,27];
result = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        result = result + 1;
    }
}

if (result === 0) {
    console.log("nenhum valor ´impar encontrado");
} else {
    console.log(result);
}