(() => {

    class Avenger {
        // name;
        // power;

        constructor(name = 'No Name', power = 0) {
            this.name = name;
            this.power = power;
            this.sarasa = true;
        }

    }

    class FlyingAvenger extends Avenger {
        // flying;

        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }
    }

    const hulk = new Avenger('Hulk', 9000);
    console.log(hulk);
    const falcon = new FlyingAvenger('Falcon', 50);
    console.log(falcon);
})()