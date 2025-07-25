import { Employee, EmployeeManager } from './employeeModule.js';

const manager = new EmployeeManager();

const empTable = document.getElementById("empBody");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const salaryInput = document.getElementById("salary");
const deptInput = document.getElementById("dept");
const sortSelect = document.getElementById("sort");
const filterSelect = document.getElementById("filter");

document.getElementById("addBtn").onclick = () => {
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);
    const salary = parseFloat(salaryInput.value);
    const dept = deptInput.value.trim();

    if (manager.validate(name, age, salary, dept)) {
        const emp = new Employee(name, age, salary, dept);
        manager.addEmployee(emp);
        renderTable(manager.employees);
    } else {
        alert("Validation failed");
    }
};

function renderTable(data) {
    empTable.innerHTML = "";
    data.forEach((emp, index) => {
        empTable.innerHTML += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.salary}</td>
                <td>${emp.department}</td>
                <td><button onclick="deleteEmp(${index})">Delete</button></td>
            </tr>
        `;
    });
}

window.deleteEmp = (index) => {
    manager.deleteEmployee(index);
    renderTable(manager.employees);
};

sortSelect.onchange = () => {
    manager.sortEmployees(sortSelect.value);
    renderTable(manager.employees);
};

filterSelect.onchange = () => {
    const filtered = manager.filterEmployees(filterSelect.value);
    renderTable(filtered);
};