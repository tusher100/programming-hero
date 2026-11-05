class Employee{
    name: string;
    baseSalary: number;

    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;

    }
}

const employee = new Employee("Tusher", 2000);
const employee2 = new Employee("Rahim", 3400);

// console.log(employee);
// console.log(employee2)