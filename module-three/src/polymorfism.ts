class Employee {
  constructor(
    public name: string,
   // private _baseSalary: number,
   protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  get salaryWithBonous(): number {
    return this._baseSalary + 2000;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }

  describe(): string {
    return `${this.name} earns ${this.baseSalary}`;
  }

  calculatePay(tax: number) {
    return this.baseSalary - this.baseSalary * tax;
  }
}

class Manager extends Employee {
   override calculatePay(){
        return this.baseSalary+500
    }
}



const employee =  new Employee("tusher", 1000)
const manager =  new Manager("Rahim", 1000)

// console.log(employee.calculatePay(0.10))
// console.log(manager.calculatePay())