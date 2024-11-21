class f {
  static count = 0;
  constructor(name, sallary) {
    this.n = name;
    this.s = sallary;
    // this.msg = function (j) {
    //   return `My Name ${this.n} My Is Sallary ${this.s}`
    // }
    f.count++;
  }
  msg() {
    return `My Name ${this.n} My Is Sallary ${this.s}`;
  }
}
let userOne = new f("Nawaf", "500SAR");
console.log(userOne instanceof f);
console.log(userOne.constructor === f);
console.log("jflaj".constructor);
console.log(new String("flajfl").constructor);
console.log("dfjaj" instanceof String); // false
console.log(userOne.msg());
console.log(f.count);
// userOne = { n: "Nawaf", s: "500SAR" };
// console.log(userOne instanceof Object);
// console.log(userOne.constructor === Object);

class r {
  constructor(male) {
    this.m = male;
  }
}

class s extends f {
  constructor(name, sallary, male) {
    super(name, sallary, male);
  }
}
let user = new s("Fahad", "6000", "male");
console.log(user.n);
console.log(s.count);

class User {
  #sSalary
  constructor(id,name,sSalary) {
    this.id = id
    this.name = name
    this.#sSalary = sSalary
    this.j = function() {
      return parseInt(this.#sSalary) / 3.75
    }
  }
  ss () {
    return this.#sSalary
  }
}

let test = new User('100','nawaf','500SAR')
console.log(test.j())

String.prototype.count = function (val) {
  return this.match(new RegExp(`${val}`,'gi')).length
}

let txt = 'elzero'
console.log(txt.count('e'))


let ob = {
  a:1,
  b:2,
}

Object.defineProperty(ob,'c',{
  writable: false,
  enumerable: false,
  configurable: false,
  value:3,
})

console.log(Object.getOwnPropertyDescriptors(ob))