// ⦁	Company
// class Company {
//     // TODO: implement this class...
// }
// Write a class Company, which following these requirements:
// The constructor takes no parameters:
//     You could initialize an object:
// ⦁	departments - empty object
// addEmployee({name}, {salary}, {position}, {department})
// This function should add a new employee to the department with the given name.
// ⦁	If one of the passed parameters is an empty string (""), undefined or null, this function should throw an error with the following message: "Invalid input!"
// ⦁	If salary is less than 0, this function should throw an error with the following message: "Invalid input!"
// ⦁	If the new employee is hired successfully, you should add him into the departments object with the current name of the department and return the following message: `New employee is hired. Name: {name}. Position: {position}`
// bestDepartment()
// This function should return the department with the highest average salary rounded to the second digit after the decimal point and its employees sorted by their salary by descending order and by their name in ascending order as a second criterion:
// `Best Department is: {best department's name}
// Average salary: {best department's average salary}
// {employee1} {salary} {position}
// {employee2} {salary} {position}
// {employee3} {salary} {position}
// …`

class Company {
    constructor() {
        this.department = {};
    }

    addEmployee(name, salary, position, department) {
        salary = Number(salary);
        if (!name || !salary || !position || !department) {
            throw new Error('Invalid input!');
        } else if (salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.department[department]) {
            this.department[department] = {
                avg: 0,
                sumSalary: 0,
                employees: []
            }
        }

        this.department[department].employees.push({ name, salary, position });
        this._updateDepartmentInfo(department, salary);
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let bestDepartmentArr = this._findBestDepartment();
        let buff = `Best Department is: ${bestDepartmentArr[0]}\n`;
        buff += `Average salary: ${bestDepartmentArr[1].avg.toFixed(2)}\n`;

        bestDepartmentArr[1].employees.sort((emp1, emp2) => {
            return emp2.salary - emp1.salary || emp1.name.localeCompare(emp2.name);
        }).forEach(emp => buff += `${emp.name} ${emp.salary} ${emp.position}\n`);
        
        return buff.trim();
    }

    _findBestDepartment() {
        return Object.entries(this.department).sort((a, b) => b[1].avg - a[1].avg)[0];
    }

    _updateDepartmentInfo(department, salary) {
        let currentDepartment = this.department[department];
        currentDepartment.sumSalary += salary;
        currentDepartment.avg = currentDepartment.sumSalary / currentDepartment.employees.length;
    }
}

let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));
console.log(c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"));
console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));
console.log(c.bestDepartment());
