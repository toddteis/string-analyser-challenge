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
      tally.push(factory.charInfo(element, 1));
    }
    return console.log(tally);
  };

  return {
    charOccurence,
  };
})();
