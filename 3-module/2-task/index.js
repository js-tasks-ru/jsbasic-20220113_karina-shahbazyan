function filterRange(arr, a, b) {
  const rangeFilter = arr.filter((item) => item >= a && item <= b);
  const newArr = rangeFilter.map((item) => item);
  
  return newArr;
}
