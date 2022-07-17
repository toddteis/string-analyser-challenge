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
      if (tally.length === 0) {
        const firstChar = factory.charInfo(element, 1);
        tally.push(firstChar);
      } else {
        const indexResult = tally.findIndex((char) => char.char === element);
        if (indexResult !== -1) {
          tally[indexResult].occurence += 1;
        } else {
          const nextChar = factory.charInfo(element, 1);
          tally.push(nextChar);
        }
      }
    }
    let highestOccurence = 0;
    let charHighestOccurence;
    for (let i = 0; i < tally.length; i += 1) {
      const element = tally[i];
      if (element.occurence > highestOccurence) {
        highestOccurence = element.occurence;
        charHighestOccurence = element.char;
      }
    }
    return charHighestOccurence;
  };

  return {
    charOccurence,
  };
})();
