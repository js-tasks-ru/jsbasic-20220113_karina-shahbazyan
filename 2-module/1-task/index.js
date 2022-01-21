function sumSalary(salaries) {
     if (salaries.Ann != undefined && salaries.John != undefined && salaries.Pete != undefined){
    return salaries.John + salaries.Ann + salaries.Pete;
  }
  else{
    return 0;
  }
}