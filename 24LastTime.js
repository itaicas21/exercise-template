let array = [null, 0, 15, false, -22, undefined, 47, null];
function remove(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (Boolean(arr[i]) !== false) {
            newArr.push(arr[i]);
        }
    }
    return newArr
}
console.log(remove(array));