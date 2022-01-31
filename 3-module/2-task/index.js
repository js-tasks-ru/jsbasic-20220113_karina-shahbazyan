function filterRange(arr, a, b) {
  const rangeFilter = arr.filter((item) => item >= a && item <= b);
  return rangeFilter.map((item) => item);
}
