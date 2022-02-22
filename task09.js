/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters 
after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, 
they should be returned as they are. Only letters from the latin/english alphabet should be shifted, 
like in the original Rot13 "implementation". 

Example:

abcdefghijklmnopqrstuvwxyz
NOPQRSTUVWXYZABCDEFGHIJKLM

aha ↔ nun	ant ↔ nag
balk ↔ onyx	bar ↔ one

*/

function rot13(message) {
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let rot13 = "nopqrstuvwxyzabcdefghijklm";
  let text = "";

  for (let char of message) {
    if (abc.indexOf(char.toLowerCase()) < 0) {
      text += char;
    } else if (char !== char.toUpperCase()) {
      text += rot13[abc.indexOf(char)];
    } else {
      text += rot13[abc.indexOf(char.toLowerCase())].toUpperCase();
    }
  }

  return text;
}

console.log(rot13("1/gRfg"));


// Best solution 
function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }