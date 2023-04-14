#!/usr/bin/node

const fs = require('fs');

const sourceFilePath1 = process.argv[2];
const sourceFilePath2 = process.argv[3];
const destFilePath = process.argv[4];

fs.readFile(sourceFilePath1, 'utf8', (err, data1) => {
  if (err) throw err;
  fs.readFile(sourceFilePath2, 'utf8', (err, data2) => {
    if (err) throw err;
    const concatenatedData = data1 + data2;
    fs.writeFile(destFilePath, concatenatedData, 'utf8', err => {
      if (err) throw err;
      console.log('Files have been concatenated successfully!');
    });
  });
});
