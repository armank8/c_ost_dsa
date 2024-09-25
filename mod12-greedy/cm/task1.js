function main(boxTypes, truckSize) {
    console.log(boxTypes, truckSize);
    boxTypes.sort((a, b) => b[1] - a[1]);
    let totalUnits = 0;
    console.log(boxTypes);


    for (let i = 0; i < boxTypes.length; i++) {
        for (let j = 0; j < boxTypes[i].length; j++) {
            console.log(boxTypes[i][j]);


            if (truckSize == 0) {
                return numberOfUnits;
            }
        }
    }
}

let boxTypes = [[1, 3], [2, 2], [3, 1]];
truckSize = 4;
console.log(main(boxTypes, truckSize));