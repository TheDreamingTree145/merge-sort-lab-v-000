function findMinAndRemoveSorted(firstHalf, secondHalf) {
  let firstMin = firstHalf[0];
  let secondMin = secondHalf[0];
  if (firstMin < secondMin) {
    return firstHalf.shift()
  } else {
    return secondHalf.shift()
  }
}

function merge(firstHalf, secondHalf) {
  
}