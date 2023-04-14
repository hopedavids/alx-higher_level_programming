#!/usr/bin/node

const Rectangle = require('./5-rectangle');

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  charPrint(c) {
    if (c === undefined) {
      c = "X";
    }
    const row = c.repeat(this.width);
    for (let i = 0; i < this.height; i++) {
      console.log(row);
    }
  }
}