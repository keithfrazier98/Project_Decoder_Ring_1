// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function wrapAlphabet(charCode) {
    if (charCode > 122) {
      charCode -= 26;
    } else {
      charCode += 26;
    }
    return charCode;
  }

  function caesar(input, shift, encode = true) {
    try {
      if (!input) {
        throw "Oops! No input was provided.";
      }

      if (!shift) {
        throw "Oops! No shift amount was provided.";
      }
      if (shift === true || shift > 25 || shift < -25) {
        throw "Oops! Shift amount cannot be greater than 25 or less than -25.";
      }
    } catch (error) {
      console.log(error);
      return false;
    }

    input = input.toLowerCase();
    const inputArray = input.split("");
    const alphabetChars = [...Array(27).keys()];
    const UTFChars = alphabetChars.map((num) => num + 97);
    UTFChars.pop();
    let output = [];

    inputArray.forEach((char) => {
      let charCode = char.charCodeAt();
      if (UTFChars.includes(charCode)) {
        encode ? (charCode += shift) : (charCode -= shift);
        //if charCode is greater than 122 or less than 97, loop around range of numbers
        if (charCode > 122 || charCode < 97) charCode = wrapAlphabet(charCode);
        output.push(String.fromCharCode(charCode));
      } else {
        output.push(char);
      }
    });
    output = output.join("");
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
