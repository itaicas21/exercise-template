function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    //Assuming I convert string to array
    let Arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    for (let i = 0; i < Arr.length; i++) {
        console.log(`row ${i} \n`);
        for (let j = 0; j < Arr[i].length; j++){
            console.log(Arr[i][j]+ '\n');
        }
        }
/**/
    output.innerText = out;
}