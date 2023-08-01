function problem(x){
  //Check to see if argument is a string or a NaN
  if (typeof x === 'string' || isNaN(x) ) {
    return 'Error'
  //Otherwise, multiply the argument by 50 and add 6
  } else
  return (x * 50) + 6;
}