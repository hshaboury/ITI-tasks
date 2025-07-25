export class Employee {
    constructor(name, age, salary, department) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.department = department;
    }
}

export class EmployeeManager {
    constructor() {
        this.employees = [];
    }

    validate(name, age, salary, department) {
        if (!name || typeof name !== 'string') return false;
        if (isNaN(age) || age < 20 || age > 60) return false;
        if (isNaN(salary) || salary === '') return false;
        if (!department) return false;
        return true;
    }

    addEmployee(emp) {
        this.employees.push(emp);
    }

    deleteEmployee(index) {
        this.employees.splice(index, 1);
    }

    sortEmployees(by) {
        this.employees.sort((a, b) => a[by].localeCompare(b[by]));
    }

    filterEmployees(ageType) {
        return this.employees.filter(emp => ageType === '>50' ? emp.age > 50 : emp.age <= 50);
    }
}