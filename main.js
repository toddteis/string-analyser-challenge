const factory = (() => {
  const charInfo = (char, occurence) => ({ char, occurence });

  return {
    charInfo,
  };
})();

// eslint-disable-next-line no-unused-vars
const strAnalyser = (() => {
  const charOccurence = (str) => {
    const charArray = str.toLowerCase().split('');
    const tally = [];
    for (let i = 0; i < charArray.length; i += 1) {
      const element = charArray[i];

      // if the tally array is empty.
      if (tally.length === 0) {
        const firstChar = factory.charInfo(element, 1);
        tally.push(firstChar);
      } else {
        // console.log(tally);
        const indexResult = tally.findIndex((char) => char.char === element);
        if (indexResult !== -1) {
          tally[indexResult].occurence += 1;
        } else {
          const nextChar = factory.charInfo(element, 1);
          tally.push(nextChar);
        }
      }
    }
    
    return console.log(tally);
  };

  return {
    charOccurence,
  };
})();
