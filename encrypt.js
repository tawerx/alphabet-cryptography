import fs from 'fs';
import { findNewEncryptPos, formatingStr } from './lib';

const text = fs.readFileSync('text.txt', { encoding: 'utf8' });

const key = '7654382910';
const alphabet = 'абвгдежзийклмнопрстуфхцчшщъыьэюя';

const textArray = text.split(' ');

let code = 0;

const encrypted = textArray.map((str) => {
  const formatedStr = formatingStr(str);
  console.log(formatedStr);
  let newWord = '';
  for (let i = 0; i < formatedStr.length; i++) {
    if (formatedStr[i].toUpperCase() != formatedStr[i].toLowerCase()) {
      const findItem = alphabet.indexOf(formatedStr[i].toLowerCase());
      const position = findItem + Number(key[code]);
      const newPosition = findNewEncryptPos(position);

      if (formatedStr[i] == formatedStr[i].toUpperCase()) {
        const newChar = alphabet[newPosition].toUpperCase();
        newWord += newChar;
      } else {
        const newChar = alphabet[newPosition];
        newWord += newChar;
      }
      code++;
    } else {
      newWord += formatedStr[i];
    }

    if (code == 10) {
      code = 0;
    }
  }
  return newWord;
});

const encryptedStr = encrypted.join(' ');
fs.writeFileSync('encrypt.txt', encryptedStr);
