// alert('afj') massage
// let c = confirm('all') yes or no
// let p = prompt('faf') input text

setTimeout(_ => {
  console.log('Massage')
},3000)

document.querySelector('button').addEventListener('click',_=> {
  clearTimeout(1)
  print()
})

let i = 0
<<<<<<< HEAD
// setInterval(() => {
//   i++
//   console.log(i)
// }, 1000);
// let elzero = open('https://elzero.org','_blank')

=======
let number = setInterval(() => {
  i++
  console.log(i)
  if (i===10) {
    clearInterval(number)
  }
}, 1000);
>>>>>>> 60c2476a3499b7730b78370142921d32df44ae21
