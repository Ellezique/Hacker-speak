const hackerSpeak = (str) => {
  replacement = {
    // string character to match: replacement number
    "a": "0",
    "A": "0",
    "e": 1,
    "E": 1,
    "i": 2,
    "I": 2,
    "o": 3,
    "O": 3,
    "u": 4,
    "U": 4
  }
  //for each character in the string (identify each character by its index position)
  for (index = 0; index < str.length; index += 1) {
    //if the character at the current string index matches a character from the replacement list
    if (replacement[str[index]]) {
      //replace that character with the replacement number at the same string index
      str = str.replace(str[index], replacement[str[index]]);
    }
  }
  console.log(str)
  return (str)
}

hackerSpeak("Ha ha ha"); // returns  H0 h0 h0

hackerSpeak("How about this string?") // returns H3w 0b34t th2s str2ng?

hackerSpeak("A bit of a challenge!"); //returns  0 b2t 3f 0 ch0ll1ng1!

module.exports = { hackerSpeak };


