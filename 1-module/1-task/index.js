function factorial(number) {
  if ((number == 1) || (number == 0)) {
    return 1;
  }
  else if (number < 0) {
    return 0;
  }
  else{
    let factorial = number;
    let k = 1;
    while ( k != number){
      factorial = factorial*(number-k);
      k++;
    }
    return factorial;
  }
}



