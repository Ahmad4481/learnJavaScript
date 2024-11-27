function findMissingLetterIn(giveLe) {
  let a = "abcdefghijklmnopqrstuvqxyz";
  let start = a.indexOf(giveLe[0]);
  let w = [];
  for (let i = 0; i < giveLe.length; i++) {
    console.log(giveLe[i]);
    if (a[start + i] != giveLe[i]) {
      w.push(a[start + i]);
      i = a.indexOf(giveLe[i]);
    }
  }
  return w;
}
console.log(findMissingLetterIn("abdegi"));
console.log(findMissingLetterIn("defgi"));
console.log(findMissingLetterIn("xyz"));
