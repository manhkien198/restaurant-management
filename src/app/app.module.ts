import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { HomeComponent } from 'src/components/dashboard/home.component';
import { FoodComponent } from 'src/components/food/food.component';
import { LoginComponent } from 'src/components/login/login.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { TableComponent } from 'src/components/table/table.component';
import { UsersComponent } from 'src/components/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenIntecepterService } from './token-intecepter.service';

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
    ProgressSpinnerModule,
    ToastModule,
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
