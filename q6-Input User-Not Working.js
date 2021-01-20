function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    const arrStr= input.split();
    let evenDash = arrStr.slice();
    for (let i = 0; i < arrStr.length-1; i++){
        if (parseInt(arrStr[i], 10) % 2 === 0 && parseInt(arrStr[i + 1], 10) % 2 === 0) {
            evenDash.splice(i+1, 0, '-');//
        }
    }
    out = evenDash.join('');

/**/
    output.innerText = out;
    
}