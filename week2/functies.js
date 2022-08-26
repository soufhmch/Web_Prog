/*
const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));

//////////////////////////////////////////////////////////////////////////////

function print(action) {
  const value = prompt("geef woord in");
  action(value);
}

let printToAlert = (woord) => {
  alert(woord);
};

let printToConsole = (woord) => {
  console.log(woord);
};

print(printToAlert);

//////////////////////////////////////////////////////////////////////////////

function kleinste(getal1, getal2) {
  if (getal1 < getal2) {
    console.log(getal1);
  } else {
    console.log(getal2);
  }
}

kleinste(7, 2);

//////////////////////////////////////////////////////////////////////////////

const str = "flexiple";
const str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);

//////////////////////////////////////////////////////////////////////////////

function countVowel(str) {
  const count = str.match(/[aeiou]/gi).length;
  return count;
}
const string = prompt("geef een woord");
const result = countVowel(string);
console.log(result);
*/
//////////////////////////////////////////////////////////////////////////////

function countB(str) {
  const count = str.match(/[B]/g).length;
  return count;
}

const countChar = (woord, letter) => {
  let count = 0;
  for (let i = 0; i < woord.length; i++) {
    if (woord.charAt(i) == letter) count++;
  }
  return count;
};
console.log(countB("BbC"));
console.log(countChar("kakkerlak", "k"));
