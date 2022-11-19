(() => {

    class Apocalipsis {

        static instance: Apocalipsis;
        private constructor(public name: string) {

        }

        static callAPocalipsis(): Apocalipsis {
            if(!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Im the only Apocalipsis');
            }

            return Apocalipsis.instance;
        }
    }

    const apocalipsis1 = Apocalipsis.callAPocalipsis();
    const apocalipsis2 = Apocalipsis.callAPocalipsis();
    const apocalipsis3 = Apocalipsis.callAPocalipsis();

    // const apocalipsis = new Apocalipsis('world ended');
    // const apocalipsis2 = new Apocalipsis('world ended two');
    // const apocalipsis3 = new Apocalipsis('world ended three');

    // console.log(apocalipsis1);
    // console.log(apocalipsis2);
    // console.log(apocalipsis3);
    

})()