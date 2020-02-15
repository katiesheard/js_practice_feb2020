function capitalize(word) {
  if (word === undefined) throw new Error("word is required"); {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
};

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required"); {
    return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
  }
};

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required"); {
    return originalPrice + (vatRate * originalPrice)
  }
};
const vatRate = 0.2

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
};

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let splitString = word.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};

function reverseAllWords(words) {
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
};

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
