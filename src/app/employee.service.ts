import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // This variable is used to store api url.
  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.baseUrl
   }

   // this method is used to api call for all employee
   public getEmployees(): Observable<Employee[]>{
     const URL= `${this.url}`
     return this.http.get<Employee[]>(URL)
   }

   // this method is used to api call for particular employee by id
   public getEmployeeById(id: number): Observable<Employee>{
     const URL = `${this.url}${id}`
     return this.http.get<Employee>(URL)
   }
}
