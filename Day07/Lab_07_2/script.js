/* Write a Constructor function for Employee (name,age,department,salary) contains
setters , getters for salary (salary is private) and toString function to display
Employee data on console */

function Employee(name, age, department) {
    this.Name = name;
    this.Age = age;
    this.Department = department.toLowerCase();

    var Salary = 0;

    this.setSalary = function (sal) {
      Salary = sal + sal * 0.1;
    };
    this.getSalary = function () {
      return Salary;
    };
    this.toString = function () {
      console.log(
        " Employee name: ",
        this.Name,
        " Employee age:",
        this.Age,
        " Employee department:",
          this.Department,
        
      );
    };
}

/* Create array of Employees ,take array size from user using prompt
Then loop using prompt to take every Employee data from user Each Employee Data will be in one prompt as follow
Example “Mona , 25 , SD, 2000” */

var arrSize = prompt("Enter the number of Employees:");
var empArray=[];
for (i = 0; i < arrSize; i++)
{
    var promptData = prompt("Enter Employee Data (name,age,department,salary):");
    empData = promptData.split(",")
    var emp = new Employee(empData[0], parseInt(empData[1]), empData[2]);
    emp.setSalary(parseInt(empData[3]));
    empArray.push(emp)
    console.log(empArray[i]);
}
console.log(empArray);

//Sort them according to Department Ascending then by Salary descending.
empArray.sort(function (a, b) {
  if (a.Department < b.Department) return -1;
  if (a.Department > b.Department) return 1;

  return b.getSalary() - a.getSalary();
});

//Filter Employees with salaries greater than 2000.
var emp2000 = empArray.filter(function (elem) {
    return elem.getSalary() > 2000;
})

//Display the total and average salaries of all employees on alert box
var total=0
for (i = 0; i < empArray.length; i++){
    total += empArray[i].getSalary();
}
var average = total / empArray.length;
alert("Total Salary: " + total + "\nAverage Salary: " + Math.round(average));

//Get the highest employee’s salary in each department without knowing departments name
var departments = [];

for (i = 0; i < empArray.length; i++) {
    var dept = empArray[i].Department;
    if (departments.includes(dept)==false) {
        departments.push(dept);
    }
}

for (i = 0; i < departments.length; i++) {
    var dept = departments[i];
    var highestEmp=null;

    for (j = 0; j < empArray.length; j++) {

        if (empArray[j].Department === dept)
        {
            if ((highestEmp == null || empArray[j].getSalary() > highestEmp.getSalary()))
            {
              highestEmp = empArray[j];
            }
        }
    }

    console.log("Department:", dept);
    highestEmp.toString();
}

