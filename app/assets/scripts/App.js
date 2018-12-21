// var Person=require('./modules/Person')
import Person from './modules/Person';

class Adult extends Person{
  payTaxes(){
    console.log(this.name+"now owes $0 in taxes.")
  }
}
var john = new Person("John Doe","blue");
// alert("greetings");
john.greet();
var jane = new Person("Jane Smith","green");
jane.greet();
jane.payTaxes();