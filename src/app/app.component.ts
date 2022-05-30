import { Component } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'restaurant-management';
  public items: MenuItem[] = [];
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: ['/dashboard'],
      },
      {
        label: 'Seat',
        icon: 'pi pi-table',
        routerLink: ['/table'],
      },
      {
        label: 'Food',
        icon: 'pi pi-list',

        routerLink: ['/food'],
      },
      {
        label: 'Employees',
        icon: 'pi pi-user',

        routerLink: ['/users'],
      },
      { label: 'Log out', icon: 'pi pi-sign-out' },
    ];
  }
}
