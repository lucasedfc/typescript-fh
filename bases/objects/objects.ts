(() => {
  let flash: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Super Speed', 'Time travel'],
  };

  let superman: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Super Speed'],
    getName() {
      return this.name;
    }
  };


  console.log(superman.getName());
})();
