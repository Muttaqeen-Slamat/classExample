//class is a plan/blueprint
class Person{
//  depend on class not a object  
    static count = 0
    constructor(){
//      setting default value to properties
        this.firstname = 'Please provide your firstname'
        this.lastname = 'Please provide your lastname'
        this.age = 0
//      accumulate by one
        Person.count += 1
    }
    set Firstname(value){
        this.firstname = value
    }
    get Firstname(){
        return this.firstname
    }
    set Lastname(value){
        this.lastname = value
    }
    get Lastname(){
        return this.lastname
    }
    set Age(value){
        this.age = value
    }
    get Age(){
        return this.age
    }
//  display method
    display(){
        console.log(`
            Personid: ${Person.count}
            Firstname: ${this.Firstname}
            Lastname: ${this.Lastname}
            Age: ${this.Age}`
        )
    }
}

export{
    Person
}