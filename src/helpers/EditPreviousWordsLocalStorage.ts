export const getPreviousWords = () => {
  const prevWords = JSON.parse(localStorage.getItem('previousWords') + '');
  return prevWords ? prevWords : [];
};

export const setNewPreviousWord = (newWord: string) => {
  const previousWords = getPreviousWords() || [];
  if(previousWords.includes(newWord)) return;
  if (previousWords.length >= 10) {
    previousWords.pop();
    previousWords.unshift(newWord);
  } else previousWords.unshift(newWord);

  localStorage.setItem('previousWords', JSON.stringify(previousWords));
};
