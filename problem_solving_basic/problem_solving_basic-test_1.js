function sumArraay(array) {
  array.sort((a, b) => a - b);

  let minArray = array.slice(0, 4);
  let maxArray = array.slice(-4);

  let sumMin = 0;
  let sumMax = 0;

  minArray.forEach((num) => {
    sumMin += num;
  });

  maxArray.forEach((num) => {
    sumMax += num;
  });

  console.log(sumMin + " " + sumMax);
}

const a1 = [5, 9, 4, 3, 7];
sumArraay(a1);
const a2 = [1, 2, 3, 4, 5];
sumArraay(a2);

function sumExceptEach(array) {
  let totalSum = array.reduce((acc, curr) => acc + curr, 0);
  for (let i = 0; i < array.length; i++) {
    let excludedValue = array[i];
    let remainingValues = array.filter((_, index) => index !== i);
    let sumWithoutExcluded = totalSum - excludedValue;

    console.log(`Sum everything except ${excludedValue}, the sum is ${remainingValues.join(" + ")} = ${sumWithoutExcluded}`);
  }
}

sumExceptEach(a2);
