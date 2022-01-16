function ucFirst(str) {
  if (( str === null) || (str === undefined ) || (str === '')) {
    return '';
  }
  else {
     let str1 = str[0].toUpperCase();
     let str2 = str1 + str.slice(1);
     return str2;
  }
}


