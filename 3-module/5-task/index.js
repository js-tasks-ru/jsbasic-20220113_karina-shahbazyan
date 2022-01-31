function getMinMax(str) {
  let arr = str.split(' ');
  arr = arr.map(member => Number(member));
  arr = arr.filter((member) => (!isNaN(member)));
  return result = {
    max: Math.max.apply(null,arr),
    min: Math.min.apply(null,arr),
  }
}
