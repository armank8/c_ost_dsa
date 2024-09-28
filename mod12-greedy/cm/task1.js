function main(boxTypes, truckSize) {
    console.log(boxTypes, truckSize);
    boxTypes.sort((a, b) => b[1] - a[1]);
    let totalUnits = 0;
    console.log(boxTypes);


    for (let i = 0; i < boxTypes.length; i++) {
        let numberOfBoxes = boxTypes[i][0];
        let unitsPerBox = boxTypes[i][1];
        console.log(numberOfBoxes, unitsPerBox);

        let boxesToTake = Math.min(numberOfBoxes, truckSize);

        totalUnits = totalUnits + boxesToTake * unitsPerBox;

        truckSize = truckSize - boxesToTake;

        if (truckSize === 0) {
            break;
        }
    }

    return totalUnits;
}

let boxTypes = [[1, 3], [2, 2], [3, 1]];
// let boxTypes = [[5, 10], [2, 5], [4, 7], [3, 9]];
truckSize = 4;
console.log(main(boxTypes, truckSize));