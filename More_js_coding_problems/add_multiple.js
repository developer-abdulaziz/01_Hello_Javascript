//===== Use add and multiplication to calculate wood requirements=====////

/*
fixes: per item wood requirements
    1. chairWood = 3cft / chair;
    2. tableWood = 10cft / table;
    3. bedWood = 50cft / bed;

very: quantity
*/

// function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;
//     //wood calculation
//     const chairWoodQuantity = chairQuantity * perChairWood;
//     const tableWoodQuantity = tableQuantity * perTableWood;
//     const bedWoodQuantity = bedQuantity * perBedWood;

//     // adding all wood quantity
//     const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
//     return totalWood;
// }

// const firstOption = woodCalculator(1, 1, 1);
// console.log(firstOption);



//==============================practice=================================//
/*****function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuantity = perChairWood * chairQuantity;
    const tableWoodQuantity = perTableWood * tableQuantity;
    const bedWoodQuantity = perBedWood * bedQuantity;
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
const totalQuantity = woodCalculator(1, 1, 1);
console.log(totalQuantity);*////////






// function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
//     const perChairWood = 4;
//     const perTableWood = 2;
//     const perBedWood = 3;

//     const chairWoodQuantity = perChairWood * chairQuantity;
//     const tableWoodQuantity = perTableWood * tableQuantity;
//     const bedWoodQuantity = perBedWood * bedQuantity;
//     const totalWoodQuantity = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
//     return totalWoodQuantity;

// }
// const totalQuantity = woodCalculator(2, 2, 3);
// console.log(totalQuantity);





function sagolQuantity(sgl1, sgl2, sgl3) {
    const perSgl1 = 4;
    const perSgl2 = 2;
    const perSgl3 = 1;

    const sgl1Quantity = perSgl1 * sgl1;
    const sgl2Quantity = perSgl2 * sgl2;
    const sgl3Quantity = perSgl3 * sgl3;

    const totalSagolQuantity = sgl1Quantity + sgl2Quantity + sgl3Quantity;
    return totalSagolQuantity;

}
const totalSagol = sagolQuantity(10, 4, 5);
console.log(totalSagol);