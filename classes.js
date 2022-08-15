class Human{
  name =""
  constructor(name){
    this.name=name
  }
  sayHi(){
      return `my name is ${this.name}!`
  }
}

class Teacher extends Human{
    currentlyTeaching = "yes"
    sayHi(){
        return `Hi I'm professor ${this.name}!`
    }
}
class Student extends Human {
    grade= 100
}

let student1 = new Student("bobby")
let teacher = new Teacher("jennifer")

console.log(student1.name)
console.log(student1.sayHi())
console.log(teacher.name)
console.log(teacher.sayHi())