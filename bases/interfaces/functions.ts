(() => {

    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let sum: addTwoNumbers;

    sum = (a: number, b: number) => { return 10 }

})()