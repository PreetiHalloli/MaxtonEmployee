import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.baseUrl
   }

   public getEmployees(): Observable<Employee[]>{
     const URL= `${this.url}`
     return this.http.get<Employee[]>(URL)
   }
}
