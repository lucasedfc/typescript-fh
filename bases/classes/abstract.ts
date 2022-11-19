(() => {
  abstract class Mutant {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutant {
    saveWorld() {
        return 'World Saved';
    }
  }
  class Villain extends Mutant {
    destroyWorld() {
        return 'World Destroyed';
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan');
  const magneto = new Villain('magneto', 'magnus');

//   console.log(wolverine.saveWorld());
//   console.log(magneto.destroyWorld());

  const printName = (character: Mutant) => {
    // console.log(character.realName);
  }

  printName(magneto)
})();
