import fs from 'fs';
import { findNewDecryptPos } from './lib';

const text = fs.readFileSync('encrypt.txt', { encoding: 'utf8' });

const key = '7654382910';
const alphabet = 'абвгдежзийклмнопрстуфхцчшщъыьэюя';

const textArray = text.split(' ');

let code = 0;

const decrypted = textArray.map((str) => {
  let newWord = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() != str[i].toLowerCase()) {
      const findItem = alphabet.indexOf(str[i].toLowerCase());
      const position = findItem - Number(key[code]);
      const newPosition = findNewDecryptPos(position);

      if (str[i] == str[i].toUpperCase()) {
        const newChar = alphabet[newPosition].toUpperCase();
        newWord += newChar;
      } else {
        const newChar = alphabet[newPosition];
        newWord += newChar;
      }
      code++;
    } else {
      newWord += str[i];
    }

    if (code == 10) {
      code = 0;
    }
  }
  return newWord;
});

const decryptedStr = decrypted.join(' ');
fs.writeFileSync('decrypt.txt', decryptedStr);
