(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zipCode: number;
    city: string;
  }

  const client: Client = {
    name: 'Michael',
    age: 30,
    address: {
      id: 124,
      zipCode: 4222,
      city: 'Scranton City',
    },
    getFullAddress(id: string) {
      return this.address.city;
    }
  };
})();
