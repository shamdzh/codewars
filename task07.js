function isIsogram(str) {
  let text = str.toLowerCase();
  let strLenght = str.length;
  let counter = 0;


  for (let i = 0; i < strLenght; i++) {
    if (counter > 1) {
      break;
    } else {
      counter = 0;
    }

    for (let a = 0; a < strLenght; a++) {
      if (text[i] === text[a]) {
        counter++;
      }
    }
  }

  return counter > 1 ? false : true;
}

// best solution function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
