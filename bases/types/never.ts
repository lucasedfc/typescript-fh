(() => {
    
    const error = (message: string): never => {
        throw new Error(message);
    };
    
    error('Help!');
    console.log('dsads');
})();
