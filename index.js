function findMinAndRemoveSorted(firstHalf, secondHalf) {
  if (firstHalf[0] > secondHalf[0]) {
    return firstHalf.shift()
  } else {
    return secondHalf.shift()
  }
}

function merge(firstHalf, secondHalf) {
  
}