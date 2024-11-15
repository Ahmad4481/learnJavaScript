// alert('afj') massage
// let c = confirm('all') yes or no
// let p = prompt('faf') input text

setTimeout(_ => {
  console.log('Massage')
},3000)

document.querySelector('button').addEventListener('click',_=> {
  clearTimeout(1)
})

let i = 0
let number = setInterval(() => {
  i++
  console.log(i)
  if (i===10) {
    clearInterval(number)
  }
}, 1000);