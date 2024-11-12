/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/



let Name = 'Nawaf'
console.log(Name[5]) // undefined
console.log(Name.charAt(5)) // 
console.log(Name[2]) // w
console.log(Name.charAt(2)) // w
console.log(Name.length) // int(5)
console.log(Name.toUpperCase()) // NAWAF
console.log(Name.toLowerCase()) // nawaf
console.log('    ahmad   '.trim())  // ahmad
Name = 'Eelzero Web Schoeol'

console.log(Name.indexOf('e',4 ,10))
console.log(Name.indexOf('e'))
console.log(Name.lastIndexOf('e' ,8 ,100))
console.log(`${Name.slice(8,11)} `.repeat(3)) // Web Web Web
console.log(Name.slice())
console.log(Name.split(" ")) // ["Eelzero","Web","Schoeol"]
console.log(Name.split("",7)) // Eelzero

Name = 'Elzero Web School'

console.log(Name.substring(0,6)) // 0 - 6
console.log(Name.substring(6,0)) // 0 - 6
console.log(Name.substring(6,-10)) // 0 - 6
console.log(Name.substring(-1,6)) // 0 - 6
console.log(Name.substring())

console.log(Name.substr(0,6)) // 0 - 6
console.log(Name.substr(6)) //  6 - -1  
console.log(Name.substr())   
console.log(Name.substr(-6))   
console.log(Name.substr(6,10  )) // 0 - 6

console.log(Name.toLocaleLowerCase().includes("web")) // ture

console.log(Name.startsWith('E'))
console.log(Name.startsWith('E',2 ,7))


console.log(Name.endsWith('l'))
console.log(Name.endsWith('E',2 ,7))

let a = "Elzero Web School"

// Chalng One

console.log(a.charAt(2).toUpperCase()+a.slice(3,6)) // Zero

// Chalng Two 

// console.log(a.substr(-4,1).toUpperCase().repeat(8)) // HHHHHHHHH h8
// console.log(a.charAt(a.length -4).toUpperCase().repeat(8)) // HHHHHHHHH h8
// console.log(a.slice(a.length -4,a.length - 3).toUpperCase().repeat(8)) // HHHHHHHHH h8
console.log(a.charAt(a.indexOf('h')).toUpperCase().repeat(8))

// chalng Three

console.log(a.substr(0,6).split()) // ["Elzero"]

// Chalng Four 

console.log(a.substr(0,6),a.substr(-6))

// Chalng Five

console.log(a.charAt(0).toLocaleLowerCase()+a.slice(1,-1).toUpperCase()+a.substr(-1))