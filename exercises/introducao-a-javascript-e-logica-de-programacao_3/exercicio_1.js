let n = 5;
let lineIndex;
let symbol = "*";
let inputLine = "";

for (lineIndex = 0; lineIndex < n; lineIndex++) {
    inputLine = inputLine + symbol;
}

for (lineIndex = 0; lineIndex < n; lineIndex++) {
    console.log(inputLine);
}