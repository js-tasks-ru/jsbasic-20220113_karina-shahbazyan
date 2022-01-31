function camelize(str) {
  let arr = str.split('-');
  arr = arr.map((item) => { 
    if (arr.indexOf(item) !== 0 ) {
    return item[0].toUpperCase() + item.slice(1, item.length)}
    else {
      return item;
    }});
  return arr.join('');
}
