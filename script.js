const myArray = [3, 2, 1, 13, 8, 5, 0, 1];
const anotherArray = [105, 79, 100, 110];

function mergeSort(array) {
    //Recursive base case
    if(array.length === 1 ) {
        return array;
    }

    //Divides all even arrays in half; for uneven arrays math.floor rounds down (3/2 -> 1.5 becomes 1)
    const halfLength = Math.floor(array.length / 2);
    const left = array.slice(0, halfLength);
    const right = array.slice(halfLength);

    //recursively calls mergeSort on both the left and right halves
    //mergeSort halves the arrays until the base case (length = 1) is met
    //Then merge can finally be calculated, and each merge call is calculated thereafter

    return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {
    let result = [],
        leftIndex = 0,
        rightIndex = 0;

    //While loops ends when the array[index] of ONE array is empty
    while (leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    //The array with the smallest values when slice[index] returns nothing
    //The array with the largest values that have not been sorted are sliced & concat
    return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

console.log(mergeSort(myArray));
console.log(mergeSort(anotherArray));