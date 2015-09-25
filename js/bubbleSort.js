var numArray = [6,5,1];
function bubbleSort(numArray) {
  var swap = false;
  var counter = 0;
  do {
    swap = false;
    for ( var i = 0; i < numArray.length;i++) {
      var temp;
      if(numArray[i] > (numArray[i+1])) {
        temp = numArray[i];
        numArray[i] = numArray[i+1];
        numArray[i+1] = temp;
        swap = true;
        counter ++;
      }
    }
  } while (swap);
  console.log(numArray);
  return numArray;
}
bubbleSort(numArray);