import { Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // This variable is used to store all Employees data.
  public employees: Employee[];
  // This variable is used to store all search data.
  public searchText: "";
  // This variable is used to store all selected data from dropdown.
  selectedDept: any;
  // This variable is used to count cadidates.
  public count = 0;
  // This boolean is used to set asc or desc order.
  isDesc: boolean = false;
  // This variable is used give set column name
  column: string = '';

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getAllEmployees()
  }

  // This method is used to get all employees.
  public getAllEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    })
  }

  // This method is used to get all searched data.
  public onSearch(searchText) {
    this.employees = []
    if (searchText == "") {
      this.employees = this.emp
    } else {
      for (let i = 0; i <= this.emp.length; i++) {
        let array = Object.values(this.emp[i])
        if (array.includes(searchText)) {
          this.employees.push(this.emp[i])
        }
      }
    }
  }

  // This method is used to get all employees data whose experince is more than 2 years.
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

  // This method is used to dalete all employees who is from development department.
  public removeDevelopmentDeptCandidate() {
    this.employees = [];
    this.emp.forEach(emp => {
      if (emp.department !== "Development") {
        this.employees.unshift(emp)
      }
    })
  }

  // This method is used to count all employees from selected department.
  public countOfCandidate(selectedDept) {
    this.emp.forEach(emp => {
      if (emp.department == selectedDept.name) {
        this.count = this.count + 1
      }
    });

  }

  // This method is used to sort all employees column wise .
  public sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.employees = this.emp.sort(function (a, b) {
      if (a.department < b.department) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  };


  // static data
  emp: Employee[] = [
    {
      "id": 11, "name": "ash", "department": "Finance", "joining_date": "8/1/2016"
    },
    {
      "id": 12, "name": "ppp", "department": "HR", "joining_date": "5/2/2017"
    },
    {
      "id": 13, "name": "qqq", "department": "Development", "joining_date": "6/9/2016"
    },
    {
      "id": 14, "name": "rrr", "department": "Operations", "joining_date": "5/11/2019"
    },
    {
      "id": 15, "name": "sss", "department": "Finance", "joining_date": "7/2/2020"
    },
    {
      "id": 16, "name": "ttt", "department": "HR", "joining_date": "11/11/2020"
    },
    {
      "id": 17, "name": "uuu", "department": "Development", "joining_date": "1/9/2018"
    },
    {
      "id": 18, "name": "vvv", "department": "Development", "joining_date": "8/8 /2016"
    },
    {
      "id": 19, "name": "www", "department": "Operations", "joining_date": "10/10/2018"
    },
    {
      "id": 20, "name": "xxx", "department": "Finance", "joining_date": "8/10/2016"
    }
  ]

  //departments
  departments = [
    { name: 'HR' },
    { name: 'Finance' },
    { name: 'Operations' },
    { name: 'Development' },
  ]

}