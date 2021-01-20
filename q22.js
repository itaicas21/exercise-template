let arrInp1 = [1, 2, 3];
let arrInp2 = [100, 2, 1, 10];
let arrId = [];
let arrVal = [];
let count = 0;
for (let i = 0; i < arrInp1.length; i++) {
    if (arrId[arrInp1[i]] === undefined) {
        arrId[arrInp1[i]] = 0;
        arrId[arrInp1[i]]++;
    }else arrId[arrInp1[i]]++;
}
for (let i = 0; i < arrInp2.length; i++) {
    if (arrId[arrInp2[i]] === undefined) {
        arrId[arrInp2[i]] = 0;
        arrId[arrInp2[i]]++;
    }else arrId[arrInp2[i]]++;
}

for (let i = 0; i < arrId.length; i++) {
    if (arrId[i] !== undefined) {
        if (arrId[i] >= 1) {
            arrVal.push(i);
        }
    }
}
console.log(arrVal);