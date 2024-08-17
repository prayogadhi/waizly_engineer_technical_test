function positiveNegativeZero(arr) {
  let len = arr.length;

  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < len; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else if (arr[i] == 0) {
      zeroCount++;
    }
  }

  postiveRatio = (positiveCount / len).toFixed(6) + " ";
  negativeRatio = (negativeCount / len).toFixed(6) + " ";
  zeroRatio = (zeroCount / len).toFixed(6);

  console.log(postiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);

  alert(postiveRatio + negativeRatio + zeroRatio);
}

var input1 = prompt("Enter array length:");
var input2 = prompt("Enter numbers separated by commas:");

var arr = [];
arr.length = input1;
var arr = input2.split(",").map(Number);

if (arr.length != input1) {
  alert("Array length must be " + input1);
} else {
  positiveNegativeZero(arr);
}

// -4 3 -9 0 4 1
