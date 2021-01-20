function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    const arrStr = input.split(',');
    let arrNum = [];
    for (let i = 0; i < arrStr.length;i++) {
        arrNum.push(parseInt(arrStr[i], 10));
    }

    out = arrNum.sort((a,b)=>a-b);
    console.log(arrNum);
/**/
    output.innerText = out;
}