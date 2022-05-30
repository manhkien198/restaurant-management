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
  public page: number = 1;
  public size: number = 10;
  public total: number = this.food.length;
  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foodService.getFood(this.page, this.size).subscribe(
      (res: any) => {
        this.food = res.data;
      },
      (error) => console.log(error)
    );
  }
}
