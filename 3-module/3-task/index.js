function camelize(str) {
  let arr = str.split('-');
  let name;
  for (let index = 1; index < arr.length; index++) {
     name = arr[index];
     name = name[0].toUpperCase() + name.slice(1, name.length)
     arr[index] = name;
  }
  return arr.join('');
}
