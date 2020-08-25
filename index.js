
function findMinAndRemoveSorted (arr) {
    let min = arr[0];
    let indexForSplice;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
            indexForSplice = i;
        }
    }
    arr.splice(indexForSplice, 1)
    return min;
}

function merge (arr1, arr2) {
    let finalArray = [];
    while (arr1.length !== 0 && arr2.length !== 0){
        if(arr1[0] < arr2[0]){
            finalArray.push(findMinAndRemoveSorted(arr1));
        }
        else{
            finalArray.push(findMinAndRemoveSorted(arr2));
        }
    }
    return finalArray.concat(arr1).concat(arr2);
}

function mergeSort (arr) {
    let midpoint = arr.length /2;
    let firstHalf = arr.slice(0, midpoint);
    let secondHalf = arr.slice(midpoint, arr.length);

    if(arr.length < 2){
        return arr;
    }
    else{
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}