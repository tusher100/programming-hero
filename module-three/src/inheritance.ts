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
}

class Manager extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public teamMemberCount: number,
  ) {
    super(name, _baseSalary);
  }


describeWork(): string {
    return `${this.name} manage ${this.teamMemberCount} people`
}

describeManager(): string {
    return `${this.name} earn ${this._baseSalary}`
}
}

const employee = new Employee("Tusher", 6000);
const manager = new Manager("karim", 6000, 20);
employee.baseSalary = 3000;


console.log(manager.describeManager());
