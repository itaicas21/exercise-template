function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    //assuming received two inputs
    let inpOne = 1968;
    let inpTwo = 2014;
    let condition = false;
    for (let i = Math.min(inpOne, inpTwo); i < Math.max(inpOne, inpTwo); i++){
        if (i % 4 === 0) {
            if (i % 100 === 0) {
                if (i % 400 === 0) {
                    condition=true;
                } else condition=false;
            } else condition=true;;
        } else condition = false;
        
        if (condition === true) {
            out += `${i} \n`;
        }
    }

/**/
    output.innerText = out;
}