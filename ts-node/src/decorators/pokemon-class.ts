function printToConsole(constructor: Function) {
    console.log(constructor);
    
}

const printToConsoleConditional = (print: boolean = false): Function => {

    if(print) {
        return printToConsole;
    } else {
        return () => {}
    }
}

const blockPrototype = function(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

//? factory propertie
function readOnly(isWriteable: boolean = true): Function {
    return function(target: any, propertieKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);                
                return 'luke'
            },
             set(this, value) {
                Object.defineProperty(this, propertieKey, {
                    value,
                    writable: !isWriteable,
                    enumerable: false
                })
                
             }
        } 
        
        return descriptor;
    }
}


//! factory decorator: function thar return another function
//! factory method
function CheckValidPokemonId() {
    return function(target: any, propertieKey: string, descriptor: PropertyDescriptor) {
        
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if(id < 1 || id > 1000) {
                return console.error(`id must be between 1 and 1000`);
                
            } else {
                return originalMethod(id)
            }
        }
        
    }
}

@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {
    @readOnly()
    public publicApi: string = 'https://pokeapi.co';

    constructor(public name: string){}

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`pokemon saved to database ${id}`);
        
    }
}