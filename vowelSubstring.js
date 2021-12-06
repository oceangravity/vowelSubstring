const s = 'aeioaexpaaeuiou';

let sa = s
  .replaceAll(/[^aeiou]/gi, '-')
  .split('-')
  .filter((v) => v);

const check = (s) => {
  let count = 0;
  let current = new Set();
  for (i in s) {
    const l = s[i];
    for (v in l) {
      current.clear();
      for (y = v; y < l.length; y++) {
        current.add(l[y]);
        if (current.size === 5) {
          count++;
        }
      }
    }
  }
  return count;
};

let count = check(sa);

console.log(count);