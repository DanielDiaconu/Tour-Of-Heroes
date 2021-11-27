import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { filter, merge, Observable, Subscription, tap } from 'rxjs';
import { Hero } from 'src/core/interfaces/hero.interface';
import { PowerStats } from 'src/core/interfaces/powerStats.interface';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-overall-rating',
  templateUrl: './hero-overall-rating.component.html',
  styleUrls: ['./hero-overall-rating.component.css'],
})
export class HeroOverallRatingComponent implements OnInit {
  // @Input() set overallRating(value: PowerStats) {
  //   this._overallRating = value;
  // }

  // get overallRating(): PowerStats {
  //   return this._overallRating;
  // }

  // private _overallRating: PowerStats;
  powerStatsSubscription: Subscription;
  subscriptionsCollector: Subscription = new Subscription();
  rating: number;
  powerStats$: Observable<PowerStats | null> = merge(
    this.heroService.initialPowerStats$,
    this.heroService.updatedPowerStats$
  ).pipe(
    filter((value) => !!value),
    tap((stats) => this.calculateRating(stats))
  );

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.subscriptionsCollector.add(this.powerStats$.subscribe(console.log));
  }
  ngOnDestroy(): void {
    // this.powerStatsSubscription.unsubscribe();
    this.subscriptionsCollector.unsubscribe();
  }

  // ngOnChanges(): void {
  //   this.calculateRating();
  // }

  calculateRating(powerStats: PowerStats | null): void {
    if (powerStats === null) return;
    const values: number[] = Object.values(powerStats);
    this.rating = values.reduce((a: number, b: number) => a + b);
  }
}
