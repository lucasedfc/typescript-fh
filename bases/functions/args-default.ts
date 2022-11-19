(() => {

    const fullName = (firstName: string, lastName?: string, upper: boolean = false) => {

        if (upper) {
            return `${firstName} ${lastName || 'no lastName'}`.toUpperCase();
        }

        return `${firstName} ${lastName || 'no lastName'}`;

    }

    const name = fullName('Tony', 'Stark', true);

    console.log({name});
    
})()