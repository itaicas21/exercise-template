function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    //out=evenDash with empty char
    for (let i = 0; i < input.length; i++){
        out += input[i];
        console.log(out);
        if (parseInt(input[i], 10) % 2 === 0 && parseInt(input[i + 1], 10) % 2 === 0) {
            out += '-';
        }
    }

/**/
    output.innerText = out;
}