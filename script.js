const myArray = [3, 2, 1, 13, 8, 5, 0, 1];

function mergeSort(array) {
    if(array.length <= 1 ) {
        return array;
    }
    if(array.length > 1) {
        const halfLength = array.length / 2;
        const leftHalf = array.splice(0, halfLength);
        const rightHalf = array;
        
        const sortedLeft = mergeSort(leftHalf);
        const sortedRight = mergeSort(rightHalf);


    }
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];

    i = 0;
    j = 0;

    while (i < left.length || j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else if(right[j] < left[i]) {
            result.push(right[j]);
            j++;
        }
    }

    return result;
}

console.log(mergeSort(myArray));