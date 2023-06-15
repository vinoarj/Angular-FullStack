import { Component } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { Injectable, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/Services/employees.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addemployeeRequest: Employee = {

    id:'',
    name : '',
    email:'',
    phone:0,
    salary:0,
    department : ''

  }
  constructor(private addemployeeservice:EmployeesService,private router:Router){}
  ngOnInit(): void {}
  addemployee(){
    this.addemployeeservice.addemployees(this.addemployeeRequest).subscribe({
      next:(employee)=>
      {
        this.router.navigate(['employees']);
      }
    });
  }
 

}
