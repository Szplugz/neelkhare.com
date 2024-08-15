export const capitalizeFirstLetter = (word) => {
  if (word) {
    return word[0].toUpperCase() + word.slice(1);
  } else {
    return word;
  }
};
