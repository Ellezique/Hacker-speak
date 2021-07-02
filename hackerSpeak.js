//S
const hackerSpeak = (str) => {
  replacement = {
    "a": 0,
    "e": 1,
    "i": 2,
    "o": 3,
    "u": 4
  }
  let lowerstr = str.toLowerCase()
  for (index = 0; index < str.length; index += 1) {
    if (replacement[lowerstr[index]]) {
      lowerstr = lowerstr.replace(lowerstr[index], replacement[lowerstr[index]]);
    }
  }
  console.log(lowerstr)
  return(lowerstr)
}

hackerSpeak("Ha ha ha"); // returns  H0 h0 h0

hackerSpeak("How about this string?") // returns H3w 0b34t th2s str2ng?

hackerSpeak("A bit of a challenge!"); //returns  0 b2t 3f 0 ch0ll1ng1!

module.exports = { hackerSpeak };


