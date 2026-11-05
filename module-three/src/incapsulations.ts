class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary() : number{
    return this._baseSalary

  }

  get salaryWithBonous() : number {
    return this._baseSalary + 2000;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0){
        throw new Error("Salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }
}

const employee = new Employee("Tusher", 6000);

employee.baseSalary = 3000

console.log(employee.salaryWithBonous);

