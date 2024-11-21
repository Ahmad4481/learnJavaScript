class f {
  static count = 0;
  constructor(name, sallary) {
    this.n = name;
    this.s = sallary;
    // this.msg = function (j) {
    //   return `My Name ${this.n} My Is Sallary ${this.s}`
    // }
  }
  msg() {
    return `My Name ${this.n} My Is Sallary ${this.s}`;
  }
  static UptadeCount() {
    this.count++
  }
}

let userOne = new f("Nawaf", "500SAR");
console.log(userOne instanceof f);
console.log(userOne.constructor === f);


console.log('jflaj'.constructor)
console.log(new String('flajfl').constructor)
console.log('dfjaj' instanceof String) // false
console.log(f.UptadeCount())
console.log(userOne.msg())

console.log(f.count)




// userOne = { n: "Nawaf", s: "500SAR" };
// console.log(userOne instanceof Object);
// console.log(userOne.constructor === Object);
