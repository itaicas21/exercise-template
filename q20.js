function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // Assuming received array
    const arrOrg = [2, 5, 3, 5, 7, 4, 2, 5, 9, 6, 8, 5, 6, 7, 8];
let arrId = [];
let arrVal = [];
for (let i = 0; i < arrOrg.length; i++){
    if (arrId[arrOrg[i]] === undefined) {
        arrId[arrOrg[i]] = 0;
        arrId[arrOrg[i]]++;
    }else arrId[arrOrg[i]]++;
    
}
for (let i = 0; i < arrId.length; i++){
    if (arrId[i] !== undefined) {
        if (arrId[i] > 1) {
            arrVal.push(i);
        }
    }
}
    console.log(arrVal);
    out = arrVal;
/**/
    output.innerText = out;
}