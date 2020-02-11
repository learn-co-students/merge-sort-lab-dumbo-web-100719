function findMinAndRemoveSorted(array){
    let min = array[0]
    let minI = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i]
            minI = i
        }
    }
    array.splice(minI, 1)
    return min
}

function findMinAndRemove(firstHalf, secondHalf){
  let minfirstHalf = firstHalf[0]
  let minsecondHalf = secondHalf[0]
 
  if(minfirstHalf < minsecondHalf){
    return firstHalf.shift()
  } else {
    return secondHalf.shift()
  }
}
function merge(first, second){
    let sorted = [];
    while(first.length != 0 && second.length != 0){
        let cM = findMinAndRemove(first, second)
        sorted.push(cM)
    }
    return sorted.concat(first).concat(second)
}

function mergeSort(array){
    let mid = array.length/2
    let fH = array.slice(0, mid)
    let sH = array.slice(mid, array.length)
    let sorted;
    if(array.length < 2){
        return array
    }else{
        sorted = merge(mergeSort(fH), mergeSort(sH))
    }
    return sorted
}
