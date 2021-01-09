const { test, expect } = require("@jest/globals");

//exercise 1

const uppercase = (str, callback) => {
    callback(str.toUpperCase());
}

test('test to equal TEST', (done) => {
    uppercase('test', (str) => {
        expect(str).toBe('TEST');
        done();
    })
});

