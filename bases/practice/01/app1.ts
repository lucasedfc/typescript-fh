(() => {

  

  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  enum heroPower {
    flash = 5,
    superman = 100,
    batman = 1,
    acuaman = 0,
  }

  //Enumeraciones
  const fuerzaFlash: heroPower = heroPower.flash;
  const fuerzaSuperman: heroPower = heroPower.superman;
  const fuerzaBatman: heroPower = heroPower.batman;
  const fuerzaAcuaman: heroPower = heroPower.acuaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada';
  }

  function pedir_ayuda(): void {
    console.log('Auxilio!!!');
  }

  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();
