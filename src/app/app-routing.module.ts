import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './component/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './component/Employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
const routes: Routes = [
  {
    path:'',
    component: EmployeesListComponent 
  },
  {
    path:'employees',
    component: EmployeesListComponent 
  },
  {
    path:'employees/Add',
    component: AddEmployeeComponent 
  },
  {
    path:'employees/edit/:id',
    component: EditEmployeeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
