let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

mix = mix.map((el,i) => {
  return isNaN(el)?el:''
});
