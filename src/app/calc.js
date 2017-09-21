

const sum = (arr) => {
    return arr.reduce((a, b) => {
        return a + b;
    }, 0)
};

const wordList = [];

const testWord = (word) => {
    if (word.length >= 4 && word.includes('s')){
        //console.log(`Word ${word} is tested!`);
        wordList.push(word);
    }
};

const makeWord = (fullWord) => {
    for (let i = 0; i < fullWord.length; i++){
        const nextChar = fullWord.charAt(i);
        const newRemainer = fullWord.slice(0, i) + fullWord.slice(i+1);
        blah(nextChar, newRemainer);
    }
    return wordList.sort();
};

const blah = (word, remainer) => {
    testWord(word);

    for (let i = 0; i < remainer.length; i++){
        const nextChar = remainer.charAt(i);
        const newRemainer = remainer.slice(0, i) + remainer.slice(i+1);
        blah(word + nextChar, newRemainer);
    }
};

export default makeWord;
