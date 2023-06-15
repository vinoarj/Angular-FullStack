import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../Models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

baseUrl: string = environment.baseApiUrl;

constructor(private http: HttpClient) {}

getemployees(): Observable<Employee[]>
{
return this.http.get<Employee[]>(this.baseUrl+"api/Employees")
}

addemployees(addemployeeRequest:Employee):Observable<Employee>
{
  addemployeeRequest.id='00000000-0000-0000-0000-000000000000';
  return this.http.post<Employee>(this.baseUrl+"api/Employees",addemployeeRequest);
}

getemployee(id: string): Observable<Employee>
{
  return this.http.get<Employee>(this.baseUrl + "api/Employees/"+id);
}

updateemployee(id:string,updateemployeeRequest:Employee): Observable<Employee>
{
  return this.http.put<Employee>(this.baseUrl + "api/Employees/"+id, updateemployeeRequest);
}

DeleteEmployee(id:string): Observable<Employee>
{
  return this.http.delete<Employee>(this.baseUrl + "api/Employees/"+id);
}
   
}
