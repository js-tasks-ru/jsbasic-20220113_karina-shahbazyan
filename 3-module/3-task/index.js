function camelize(str) {
  let arr = str.split('-');
  arr = arr.map((item, 1) => item[0].toUpperCase() + item.slice(1, item.length));
  return arr.join('');
}
