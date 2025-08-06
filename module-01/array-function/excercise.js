function halfPyramid(height) {
  let res = "";

  for (let i = 1; i <= height; i++) {
    //BLOCK OF CODE
    for (let j = 1; j <= i; j++) {
      res += "*";
    }
    res += "\n";
  }

  return res;
}

console.log(halfPyramid(2));

function fizzBuzz(n) {
  let res = "";

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res += "fizzBuzz";
    } else if (i % 3 === 0) {
      res += "fizz";
    } else if (i % 5 === 0) {
      res += "buzz";
    } else {
      res += i;
    }

    res += i === n ? "" : ", ";
  }

  return res;
}

console.log(fizzBuzz(5));

function BMI(height, weight) {
  const bmi = weight / Math.pow(height, 2);
  console.log(bmi);
  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi < 24.9) {
    return "ideal";
  } else if (bmi < 29.9) {
    return "overweight";
  } else if (bmi < 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

console.log(BMI(1.6, 80));

function removeOdd(param) {
  //   const newArr = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       newArr.push(arr[i]);
  //     }
  //   }
  const arr = param;
  const newArr = arr.filter((n) => n % 2 === 0);

  return arr;
}
const arr = [4, 6, 2, 14, 11, 3, 5, 6, 7];
const newArr = removeOdd(arr);
console.log(newArr);

function splitStr(str) {
  return str.split("l");
}

console.log(splitStr("Hello World"));
