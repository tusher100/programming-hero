abstract class Employee {
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

  abstract calculatePay(): number;
}


class Manager extends Employee{
    calculatePay(){
        return this.baseSalary + 5000;
    }
}
class Dev extends Employee{
    calculatePay(){
        return this.baseSalary + 3000;
    }
}