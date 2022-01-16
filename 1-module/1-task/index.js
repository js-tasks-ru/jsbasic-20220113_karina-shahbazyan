function factorial(n) {
  if ((n == 1) || (n == 0)) {
    return 1;
  }
  else if (n < 0) {
    return 0;
  }
  else{
    let f = n;
    let k = 1;
    while ( k != n){
      f = f*(n-k);
      k++;
    }
    return f;
  }
}



