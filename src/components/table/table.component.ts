import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public numbers: number[] = [];
  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i < 10; i++) {
      this.numbers.push(i);
    }
  }
}
