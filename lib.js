export const findNewEncryptPos = (position) => {
  if (position > alphabet.length - 1) {
    return position - alphabet.length;
  } else {
    return position;
  }
};

export const formatingStr = (str) => {
  if (str.includes('ё')) {
    return str.replace('ё', 'е');
  } else if (str.includes('Ё')) {
    return str.replace('Ё', 'Е');
  } else return str;
};

export const findNewDecryptPos = (position) => {
  if (position < 0) {
    return alphabet.length + position;
  } else {
    return position;
  }
};
