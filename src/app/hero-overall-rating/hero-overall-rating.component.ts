import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/core/interfaces/hero.interface';

@Component({
  selector: 'app-hero-overall-rating',
  templateUrl: './hero-overall-rating.component.html',
  styleUrls: ['./hero-overall-rating.component.css'],
})
export class HeroOverallRatingComponent implements OnInit {
  @Input() overallRating: any;
  rating: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.calculateRating();
  }

  calculateRating(): void {
    const values: number[] = Object.values(this.overallRating);
    this.rating = values.reduce((a: number, b: number) => a + b);
  }
}
