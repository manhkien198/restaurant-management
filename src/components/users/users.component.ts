import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private service: EmployeeService) {}
  public employee: Employee[] = [];
  ngOnInit(): void {
    this.service.getEmployeeList().subscribe(
      (res: any) => {
        this.employee = res.data;
      },
      (err) => console.log(err)
    );
  }
}
