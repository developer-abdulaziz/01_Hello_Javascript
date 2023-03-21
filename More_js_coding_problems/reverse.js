// Explore string nature and reverse a string

/*const greetings = 'hello, how are you?';
// const greetings = 'hello, how are you?';
function reverseSring(text) {
    let reverse = '';
    for (const letter of text) {
        console.log(letter);
        // reverse = reverse + letter;
        reverse = letter + reverse;
        console.log(reverse);
    }
}
const reversed = reverseSring(greetings);
console.log(reversed);*///



// =============practice====================
function reverseSring(text) {
    let reverse = '';
    for (const letter of text) {
        console.log(letter);
        // reverse = reverse + letter;
        reverse = letter + reverse;
        console.log(reverse);
    }
}

const greetings = 'hello, how are you?';
const reversed = reverseSring(greetings);
console.log(reversed);