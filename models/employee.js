const employees = [
  {
    id: '0',
    name: 'علي حسين جاسم',
    status: 'ملاك',
    joining_date: '2020-01-11',
    phone_number: '12345678910',
    gender: 'ذكر',
  },
];
class Employee {
  constructor(name, status, joining_date, phone_number, gender) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
    this.status = status;
    this.joining_date = joining_date;
    this.phone_number = phone_number;
    this.gender = gender;
  }

  save() {
    employees.push(this);
  }

  static fetchAll() {
    return employees;
  }
}

module.exports = { Employee, employees };
