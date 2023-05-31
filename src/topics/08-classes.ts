// export class Person {
//     // public name: string;
//     // private address: string;

//     // constructor( name: string, address: string) {
//     //     this.name = name;
//     //     this.address = address;
//     // }

//     constructor(
//         public name: string,
//         private address: string = 'No Address'
//     ) {}

// }

export class Person {
    // public name: string;
    // private address: string;

    // constructor( name: string, address: string) {
    //     this.name = name;
    //     this.address = address;
    // }

    constructor(
        public firstname: string,
        public lastname: string,
        private address: string = 'No Address'
    ) {}

}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super( realName, 'New York' )
//     }

// }

export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {

        // this.person = new Person(realName);

    }
    
}

// const ironman = new Person('Ironman', 'New York');
// const ironman = new Hero('Ironman', 45, 'Tony');

// const tony = new Person('Tony Stark', 'New York')
const tony = new Person('Tony', 'Stark', 'New York')
const ironman = new Hero('Ironman', 45, 'Tony', tony);

// console.log(ironman.address); // Aunque es propiedad privada, al traspilar a javascript se permite acceder desde fuera de la clase
console.log(ironman);