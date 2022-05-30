import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from 'src/components/food/food.component';
import { HomeComponent } from 'src/components/dashboard/home.component';
import { TableComponent } from 'src/components/table/table.component';
import { UsersComponent } from 'src/components/users/users.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'table', component: TableComponent },
  { path: 'food', component: FoodComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
