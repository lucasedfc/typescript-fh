(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    active: boolean;
    power: number;
  };
  const avengers: Avengers = {
    nick: 'Samuel Jackson',
    ironman: 'Robert D Jr',
    vision: 'Paul Bettany',
    active: true,
    power: 1500,
  };

  //   const { power, vision} = avengers;
  //   console.log(power.toFixed(2), vision.toUpperCase());

  const printAvenger = ({ nick, ...rest }: Avengers) => {
  };

  printAvenger(avengers);

  const avengersArr: [string, boolean, number] = ['Cap America', true, 150];

//   const ironman = avengersArr[1]
  const [cap, ironman, aNumber ] = avengersArr
  
})();
