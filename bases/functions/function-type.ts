(() => {

    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hi ${name}`;
    const saveTheWorld = () => `The world is saved`;

    let myFunction: (y: number, z: number) => number;
            
    myFunction = addNumbers;
    console.log(myFunction(1, 4));
    
    //? let myFunction: (y: string) => string;    
    //? myFunction = greet;
    //? console.log(myFunction('Luke'));
    
    //* let myFunction: () => string;
    //* myFunction = saveTheWorld;
    //* console.log(myFunction());
    

})()