export default function shuffleArray(array) {
    let addedItemIndexes = [];
    let shuffledArray = [];
    let i = 0;
    while (i < array.length) {
        let randomNum = Math.floor(Math.random() * array.length);
        if (!addedItemIndexes.includes(randomNum)) {
            shuffledArray.push(array[randomNum]);
            addedItemIndexes.push(randomNum);
            i++;
        };
    };
    return shuffledArray;
};