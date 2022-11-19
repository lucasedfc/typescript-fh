(() => {
  class Avenger {
    // private name: string;
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;
    static getAvgAge() {
        return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    #bio() { // private method
        return `${this.name} (${this.team})`
    }

    publicBio() {
        return `${this.name} (${this.team})`
    }

  }

  // const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
  // console.log(antman);
  // console.log(Avenger.avgAge);

  // console.log(antman.publicBio());
  // console.log(Avenger.getAvgAge());
  
  
})();
