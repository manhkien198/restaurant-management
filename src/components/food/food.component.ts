import { Component, OnInit } from '@angular/core';
import { FoodService } from './food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  public food: any[] = [];
  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foodService.getFood().subscribe(
      (food: any) => {
        this.food = food;
      },
      (error) => console.log(error)
    );
  }
}
