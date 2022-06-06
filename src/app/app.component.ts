import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { SigninService } from 'src/components/login/service/signin.service';
import { User } from 'src/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'restaurant-management';
  public items: MenuItem[] = [];
  public user: User;
  constructor(
    private primengConfig: PrimeNGConfig,
    private signinService: SigninService,
    private router: Router
  ) {
    this.signinService.user.subscribe((x) => (this.user = x));
    if (this.user) {
      this.router.navigate(['/dashboard']);
    }
  }
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
      {
        label: 'Log out',
        icon: 'pi pi-sign-out',
        // url: '/login',
        command: () => this.signinService.logout(),
      },
    ];
  }
}
