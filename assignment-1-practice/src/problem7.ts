/*Create an Employee class and a Manager subclass following these exact specifications:

Employee class:

Has a protected property name (string) and a private property baseSalary (number).
Constructor accepts (name: string, baseSalary: number) in that exact order.
Has a method getDetails() that returns "Employee: [name], Base Salary: [baseSalary]".
Manager class (extends Employee):

Adds a private property department (string).
Constructor accepts (name: string, baseSalary: number, department: string) in that exact order and calls super(name, baseSalary).
Has a method getRoleInfo() that returns "Manager of [department]: [name]".
Requirements:
Use protected and private access modifiers as specified.
Return the exact string formats shown in the sample output.
// Sample Input:
const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();

// Sample Output:
"Employee: Alice, Base Salary: 50000"
"Manager of Engineering: Alice"*/

class Employee {
    constructor(protected name: string, private baseSalary: number){

    }
    getDetails(): string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{

    constructor(name: string, baseSalary: number, private department: string){
        super(name, baseSalary)
    }
    getRoleInfo() : string {
        return `Manager of ${this.department}: ${this.name}`

    }
}

const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());