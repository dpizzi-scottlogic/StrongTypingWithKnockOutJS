class Person implements PersonTable.IPerson {  
    constructor(public firstName: string, public lastName: string, public age: number) {
    }     
}
export = Person;