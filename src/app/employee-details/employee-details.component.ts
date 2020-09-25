import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  // This variable is used to store all Employees data.
  public employee: Employee;

  // This variable is used to store id of Employee.
  private id: number

  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute) { 
      this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getEmployeeById(this.id)
    }

  ngOnInit() {
  }

  // This method is used to get all employee of particular id.
  public getEmployeeById(id){
    this.employeeService.getEmployeeById(id).subscribe(data =>{
      this.employee = data;
    })
  }



}
