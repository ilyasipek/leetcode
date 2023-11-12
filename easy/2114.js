/**
 * @param {string[]} sentences
 * @return {number}
 */
let mostWordsFound = function (sentences) {
    let mostWordsFound = countCharsInString(sentences[0], ' ');
    if (sentences.length === 1) return mostWordsFound;

    for (let i = 1; i < sentences.length; i++) {
        let len = countCharsInString(sentences[i], ' ');
        if (len > mostWordsFound) {
            mostWordsFound = len;
        }
    }
    return mostWordsFound;
};

let countCharsInString = (text, charToFind) => {
    return (text.match(new RegExp(charToFind, "g")) || []).length + 1;
}

console.log(mostWordsFound(["This is a test", "This is another test with longer sentence"])); 