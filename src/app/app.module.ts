import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenIntecepterService } from './token-intecepter.service';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { FoodComponent } from 'src/components/food/food.component';
import { HomeComponent } from 'src/components/dashboard/home.component';
import { TableComponent } from 'src/components/table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarModule } from 'primeng/toolbar';
import { DividerModule } from 'primeng/divider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { UsersComponent } from 'src/components/users/users.component';
import { LoginComponent } from 'src/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RegisterComponent } from 'src/components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    FoodComponent,
    TableComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    BrowserAnimationsModule,
    MenuModule,
    TableModule,
    HttpClientModule,
    ToolbarModule,
    DividerModule,
    SplitButtonModule,
    PaginatorModule,
    CardModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntecepterService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
