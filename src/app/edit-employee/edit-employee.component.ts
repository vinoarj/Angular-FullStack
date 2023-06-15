import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../Services/employees.service';
import { Employee } from '../Models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit
{
  employeedetails: Employee = 
  {
    id:'',
    name : '',
    email:'',
    phone:0,
    salary:0,
    department : ''

  }

  constructor(private route:ActivatedRoute , private employeeservice: EmployeesService,private router:Router){}

  ngOnInit(): void 
  {
        this.route.paramMap.subscribe(
          {
            next : (params)=>
            {
              const id = params.get('id');

              if(id)
              {
      this.employeeservice.getemployee(id).subscribe({
        next: (reponse)=> {
          this.employeedetails = reponse;
        }
        })
              }

            }
          })  
  }

  updateEmployee(){
    this.employeeservice.updateemployee(this.employeedetails.id,this.employeedetails).subscribe({
      next:(response)=>
      {
        this.router.navigate(['employees']);
      }
    })
  }

    deleteEmployee(id: string)
    {
      this.employeeservice.DeleteEmployee(id).subscribe({
        next:(response)=>
        {
          this.router.navigate(['employees']);
        }
      })
    }
  }
