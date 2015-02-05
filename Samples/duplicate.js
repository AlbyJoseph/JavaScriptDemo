function checkIfArrayIsUnique(arr) {
    var map = {}, i, size;

    for (i = 0, size = arr.length; i < size; i++){
        if (map[arr[i]]){
            return false;
        }

        map[arr[i]] = true;
    }

    return true;
}
var dup=checkIfArrayIsUnique([10,20,45]);
console.log(dup);