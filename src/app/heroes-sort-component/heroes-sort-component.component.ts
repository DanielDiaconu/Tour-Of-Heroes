import { Component, OnInit } from '@angular/core';
import { HeroesSortServiceService } from '../heroes-sort-service.service';

@Component({
  selector: 'app-heroes-sort-component',
  templateUrl: './heroes-sort-component.component.html',
  styleUrls: ['./heroes-sort-component.component.css'],
})
export class HeroesSortComponentComponent implements OnInit {
  constructor(private heroSortService: HeroesSortServiceService) {}

  ngOnInit(): void {}

  sortHeroes(event: any): void {
    this.heroSortService.sortHeroes$.next(parseInt(event.target.value));
  }
}
