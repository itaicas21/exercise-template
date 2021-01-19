function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    function isArray(arr) {
        if ( (arr[0] === '[') && (arr[arr.length - 1] === ']') ) {
            return true;
        } else return false;
    }
    out = isArray(input);
/**/
    output.innerText = out;
}