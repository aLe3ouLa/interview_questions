function product(a,b) {
  let sum = 0; // o(1)
  for (let i = 0; i < b; i++){
    sum = sum + a; //o(1) * b
  }
  return sum; // o(1)
}

product(5,5);

// complexity o(b)
