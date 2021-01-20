const arr = [];

function add() {
    const input = document.getElementById("input").value;
    arr.push(input);

}
function display_array() {
    let out = ""
    for (let i = 0; i < arr.length;i++) {
        out += `Element ${i}: ${arr[i]} \n`;
    }
    const output = document.getElementById("output");
    output.innerText = out;
}

