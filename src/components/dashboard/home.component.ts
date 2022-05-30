import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/models';
import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public dashboardData: Array<Dashboard> = [];
  public cols: any[] = [];
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe(
      (data: any) => {
        this.dashboardData = data;
      },
      (err) => {
        console.log(err);
      }
    );
    this.cols = [
      { field: 'month', header: 'Tháng' },
      { field: 'importCost', header: 'Nhập hàng' },
      { field: 'turnover', header: 'Doanh thu' },
      { field: 'employee', header: 'Nhân viên' },
      { field: 'employeeSalary', header: 'Lương nhân viên' },
      { field: 'serviceCost', header: 'Tiền dịch vụ' },
      { field: 'interest', header: 'Lợi nhuận' },
    ];
  }
}
