"use strict";

class Employee {
    constructor(id, name, department, salary){
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary(){
        return this.salary * 12;
    }

    applyBonus(percent){
        this.salary += this.salary * (percent/100);
    }
}

const employees = [
    new Employee(1,"Amit","IT",4000),
    new Employee(2,"Sara","HR",3500),
    new Employee(3,"Kiran","Finance",4500),
    new Employee(4,"Rohit","IT",5000),
    new Employee(5,"Mina","HR",3000)
];

let output = "";
employees.forEach(e => {
    e.applyBonus(10);
    output += `${e.name}: Annual Salary = ${e.getAnnualSalary()}\n`;
});

const totalPayout = employees.reduce((sum,e)=> sum + e.getAnnualSalary(),0);
output += `\nTotal Annual Payout: ${totalPayout}`;

document.getElementById("output").textContent = output;
