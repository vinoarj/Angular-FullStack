import { Component } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { Injectable, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/Services/employees.service';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  
  employees:Employee[]=[];

constructor(private employeesService:EmployeesService){}
ngOnInit():void{
this.employeesService.getemployees().subscribe(
  {
    next: (employees)=>{
      this.employees = employees; },
    
      error: (response)=>{
        console.log(response);
  
      }
  }
);


}
}
