const removeFromArray = function(array, ...args) {
    // if element at index is equal to number: splice around index

    const newArray = [];
    array.forEach((element) => {
        if (!args.includes(element)) {
            newArray.push(element)
        }
    });
    console.log(newArray);
    return newArray;
};

const thisArray = [31, 69, 420, 13];

removeFromArray(thisArray, 31, 13);

// Do not edit below this line
module.exports = removeFromArray;
