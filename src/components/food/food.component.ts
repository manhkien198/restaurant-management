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
  constructor(private foodService: FoodService) {
    this.page = 1;
  }
  public paginate(e: any): void {
    this.page = e.page;
  }
  ngOnInit(): void {
    this.foodService.getFood(this.page, this.size).subscribe(
      (res: any) => {
        this.food = res.data;
        this.total = res.total;
      },
      (error) => console.log(error)
    );
  }
}
