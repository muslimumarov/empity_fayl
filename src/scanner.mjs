// src/scanner.mjs
import fs from 'fs';
import { Parser } from 'i18next-scanner';

const customHandler = (key) => {
    const defaultValue = '__TRANSLATION__';
    parser.set(key, defaultValue);
};

const parser = new Parser();
let content = fs.readFileSync('./src/yourFile.js', 'utf-8');  // kerakli faylni ko'rsating
parser.parseFuncFromString(content, customHandler);
console.log(parser.get());
