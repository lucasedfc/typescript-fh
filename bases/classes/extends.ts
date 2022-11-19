(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
    //   console.log('Constructor Avenger called');
    }
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
    //   console.log('Constructor Xmen Called');
    }

    getFullnameFromXmen() {
    //   console.log(super.getFullName());
    }

    get fullName() {
        return `${this.name} - ${this.realName}!` 
    }

    set fullName(name: string) {

        if(name.length < 3) {
            throw new Error('Must be at least 3 characters')
        }
        this.name = name;
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);
  wolverine.getFullnameFromXmen();
  wolverine.fullName = 'Michael'; // Setter
//   console.log(wolverine.fullName); // Getter

  const newAvenger = new Avenger('hello', 'world');
})();
