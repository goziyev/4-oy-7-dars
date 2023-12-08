// 1-masala
// 1)
function threeNumberMax(son, son1, son2) {
  let max;
  if (son > son1) {
    max = son;
  } else {
    max = son1;
  }
  if (max < son2) {
    max = son2;
  }
  return max;
}
// console.log(threeNumberMax(1,2,3));
//2)
const three_number_max = function (son, son1, son2) {
  let max;
  if (son > son1) {
    max = son;
  } else {
    max = son1;
  }
  if (max < son2) {
    max = son2;
  }
  return max;
};
// console.log(three_number_max(1,222,3));
// 3)
const ThreeNumberMax = (son, son1, son2) => {
  let max;
  if (son > son1) {
    max = son;
  } else {
    max = son1;
  }
  if (max < son2) {
    max = son2;
  }
  return max;
};
// console.log(ThreeNumberMax(99,5,1));

// 2-masala
// 1)
function twoNumberTotal(son, son1) {
  let total = 0;
  for (let i = son; i <= son1; i++) {
    if (i % 2 == 0) {
      total += i;
    }
  }
  return total;
}
// console.log(twoNumberTotal(1,10));
// 2)
const two_number_total = function (son, son1) {
  let total = 0;
  for (let i = son; i <= son1; i++) {
    if (i % 2 == 0) {
      total += i;
    }
  }
  return total;
};
// console.log(two_number_total(1,10));
// 3)
const TwoNumberTotal = (son, son1) => {
  let total = 0;
  for (let i = son; i <= son1; i++) {
    if (i % 2 == 0) {
      total += i;
    }
  }
  return total;
};
// console.log(TwoNumberTotal(1,10));

// 3-masala
// 1)
function numberSum(son) {
  let sum = 0;
  while (son >= 1) {
    sum = sum + (son % 10);
    son = Math.trunc(son / 10);
  }
  return sum;
}
// console.log(numberSum(456));
// 2)
const number_sum = function (son) {
  let sum = 0;
  while (son >= 1) {
    sum = sum + (son % 10);
    son = Math.trunc(son / 10);
  }
  return sum;
};
// console.log( number_sum(785) );
// 3)
const NumberSum = (son) => {
  let sum = 0;
  while (son >= 1) {
    sum = sum + (son % 10);
    son = Math.trunc(son / 10);
  }
  return sum;
};
// console.log(NumberSum(736));
// 4-masala
// 1)
function evenNumber(son) {
  let sum = 0;
  let even;
  while (son >= 1) {
    even = son % 10;
    if (even % 2 == 0) {
      sum += even;
    }
    son = Math.trunc(son / 10);
  }
  return sum;
}
// console.log(evenNumber(222));
// 2)
const even_number = function (son) {
  let sum = 0;
  let even;
  while (son >= 1) {
    even = son % 10;
    if (even % 2 == 0) {
      sum += even;
    }
    son = Math.trunc(son / 10);
  }
  return sum;
};
// console.log(even_number(746));
// 3)
const EvenNumber = (son) => {
  let sum = 0;
  let even;
  while (son >= 1) {
    even = son % 10;
    if (even % 2 == 0) {
      sum += even;
    }
    son = Math.trunc(son / 10);
  }
  return sum;
};
// console.log(EvenNumber(961));
// 5-masala
// 1)
function threeAndFive(son) {
  let sum = 1;
  for (let i = 1; i <= son; i++) {
    if (i % 3 != 0 && i % 5 != 0) {
      sum *= i;
    }
  }
  return sum;
}
// console.log(threeAndFive(6));
// 2)
const three_and_five = function (son) {
  let sum = 1;
  for (let i = 1; i <= son; i++) {
    if (i % 3 != 0 && i % 5 != 0) {
      sum *= i;
    }
  }
  return sum;
};
// console.log(three_and_five(15));

// 3)
const ThreeAndFive = (son) => {
  let sum = 1;
  for (let i = 1; i <= son; i++) {
    if (i % 3 != 0 && i % 5 != 0) {
      sum *= i;
    }
  }
  return sum;
};
// console.log(ThreeAndFive(5));
// 6-masala
// 1)
function sevenOrFive(son) {
  let count = 0;
  let i = 1;
  while (i <= son) {
    if (i % 7 == 0 || i % 5 == 0) {
      count++;
    }
    i++;
  }
  return count;
}
// console.log(sevenOrFive(35));
// 2)
const seven_or_five = function (son) {
  let count = 0;
  let i = 1;
  while (i <= son) {
    if (i % 7 == 0 || i % 5 == 0) {
      count++;
    }
    i++;
  }
  return count;
};
// console.log(seven_or_five(35));
// 3)
const SevenOrFive = (son) => {
  let count = 0;
  let i = 1;
  while (i <= son) {
    if (i % 7 == 0 || i % 5 == 0) {
      count++;
    }
    i++;
  }
  return count;
};
//   console.log(SevenOrFive(35));
// 7-masala
// 1)
function primeNumber(son) {
  let sum = 0;
for(let i  = 1 ;i <= son ; i++){
  let count = 0;
  for (let s = 1; s <= i; s++) {
    if (i % s == 0) {
      count++;
    }
  }
  if (count == 2) {
      sum+=i
}
else{
      sum = sum
}
}
  return sum;
}
// console.log(primeNumber(12));
// 2)
 const prime_number = function(son) {
  let sum = 0;
for(let i  = 1 ;i <= son ; i++){
  let count = 0;
  for (let s = 1; s <= i; s++) {
    if (i % s == 0) {
      count++;
    }
  }
  if (count == 2) {
      sum+=i
}
else{
      sum = sum
}
}
  return sum;
}
// console.log(prime_number(13));
// 3)
const  PrimeNumber = (son) => {
  let sum = 0;
for(let i  = 1 ;i <= son ; i++){
  let count = 0;
  for (let s = 1; s <= i; s++) {
    if (i % s == 0) {
      count++;
    }
  }
  if (count == 2) {
      sum+=i
}
else{
      sum = sum
}
}
  return sum;
}
// console.log(PrimeNumber(11));

