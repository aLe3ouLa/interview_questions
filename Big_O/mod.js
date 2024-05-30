function mod(a,b) {
  if (b<=0) {
    return -1; // o(1)
  }
  const div = a / b; // o(1)
  return a = div * b; // o(1)
}

// complexity: o(1)
