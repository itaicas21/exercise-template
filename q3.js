function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    function first(arr, num) {
        if (arr === undefined || num <=0) {
            return undefined;
        }
        if (num === undefined) {
            return arr.shift();
        } else return arr.slice(0, num);
    }

    out = first([7, 9, 0, -2],1);
/**/
    output.innerText = out;
}