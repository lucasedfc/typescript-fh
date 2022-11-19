(() => {
  let avengers: number = 10;

  console.log(avengers);

  const villians: number = 20;

  if (avengers < villians) {
    console.log('in trouble');
  } else {
    console.log('we are saved');
  }

  avengers = Number('55');

  console.log({avengers});
  
})();
