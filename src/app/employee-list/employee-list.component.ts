import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: Employee[];
  public searchText: "";

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getAllEmployees()
  }

  public getAllEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    })
  }

  public onSearch(searchText) {
    this.employees = []
    if (searchText == "") {
      this.employees = this.emp
    } else {
      for (let i = 0; i <= this.emp.length; i++) {
        let array = Object.values(this.emp[i])
        if (array.includes(searchText)) {
          let abc = this.employees.push(this.emp[i])
        }
      }
    }
  }

  public moreThanTwoYeaEexperience() {
    this.employees = []
    let todaysDate = new Date();
    let year1 = todaysDate.getFullYear();
    this.emp.forEach(emp => {
      let joiningDate = new Date(emp.joining_date);
      let year2 = joiningDate.getFullYear();
      if (year1 - year2 >= 2) {
        this.employees.push(emp)
      }
    })
  }

  public removeDevelopmentDeptCandidate() {
    this.employees = [];
    this.emp.forEach(emp => {
      debugger
      // let a  = Object.values(emp)
      if (emp.department !== "Development") {
        this.employees.unshift(emp)
      }
    })

  }

  public onSort() {

  }

  emp: Employee[] = [
    {
      "id": 11, "name": "Ash", "department": "Finance", "joining_date": "8/1/2016"
    },
    {
      "id": 12, "name": "pppp", "department": "HR", "joining_date": "5/2/2017"
    },
    {
      "id": 13, "name": "qqqqq", "department": "Development", "joining_date": "6/9/2016"
    },
    {
      "id": 14, "name": "rrrrr", "department": "Operations", "joining_date": "5/11/2019"
    },
    {
      "id": 15, "name": "ssss", "department": "Finance", "joining_date": "7/2/2020"
    },
    {
      "id": 16, "name": "tttt", "department": "HR", "joining_date": "11/11/2020"
    },
    {
      "id": 17, "name": "uuuu", "department": "Development", "joining_date": "1/9/2018"
    },
    {
      "id": 18, "name": "vvvvvv", "department": "Development", "joining_date": "8/8 /2016"
    },
    {
      "id": 19, "name": "wwww", "department": "Operations", "joining_date": "10/10/2018"
    },
    {
      "id": 20, "name": "xxxx", "department": "Finance", "joining_date": "8/10/2016"
    }
  ]

  departments = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'Finance' },
    { id: 3, name: 'Operations' },
    { id: 4, name: 'Development' },
  ]

}
