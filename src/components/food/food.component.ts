import { Component, OnInit } from '@angular/core';
import { Food } from 'src/models';
import { FoodService } from './food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  public food: Food[] = [];
  public page: number;
  public size: number = 10;
  public total: number = 0;
  public loading = true;
  constructor(private foodService: FoodService) {
    this.page = 1;
  }
  public paginate(e: any): void {
    this.loading = true;
    this.page = e.page + 1;
    this.foodService.getFood(this.page, this.size).subscribe({
      next: (value: any) => {
        this.food = value.data;
        this.total = value.total;
        this.loading = false;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {
    this.foodService.getFood(this.page, this.size).subscribe({
      next: (value: any) => {
        this.loading = false;
        this.food = value.data;
        this.total = value.total;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
