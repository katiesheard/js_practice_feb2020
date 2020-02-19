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
    return originalPrice + (vatRate * originalPrice);
  }
};

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
};

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  {
    if (str.length % 2 === 0) {
      let even = str.length / 2;
      return str.slice(even - 1, even + 1);

    } if (str.length % 2 !== 0) {
      let odd = str.charAt((str.length / 2))
      return odd;
    }
  }
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
  if (users.type !== "Linux") {
    return 0
  }
};

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var total = 0;
  for (i = 0; i < scores.length; i += 1) {
    total += scores[i];
  }
  return total / scores.length;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
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