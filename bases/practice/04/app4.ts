// Crear interfaces
interface Vehicle {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Vehicle): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil: Vehicle = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log('...... gogogo!!!');
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log('JAJAJAJA');
  }
};

// Cree una interfaz para la siguiente funcion

interface gothamFN {
  (citizens: string[]): number;
}

const ciudadGotica: gothamFN = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Person {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Person {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;

  imprimirBio() {}
}
