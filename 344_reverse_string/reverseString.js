const reverseStringSimple = (str) => {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return -1;
  }

  const reversed = [];
  const total = str.length - 1;

  for (let i = total; i = 0; i--) {
    reversed.push(str[i]);
  }

  return reversed.join("")
}

const reverseStringSimple2 = (str) => {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return -1;
  }

  return str.split("").reverse().join("");
}

const reverseString = (str) => {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return -1;
  }

  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    const temp = str[start];
    str[start] = str[end];
    str[end] = temp;
  }

  return str;
}
