import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/core/interfaces/hero.interface';
import { PowerStats } from 'src/core/interfaces/powerStats.interface';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-power-stats',
  templateUrl: './hero-power-stats.component.html',
  styleUrls: ['./hero-power-stats.component.css'],
})
export class HeroPowerStatsComponent implements OnInit {
  powerStats$ = this.heroService.initialPowerStats$.asObservable();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}

  broadcastChanges(updatedPowerStats: PowerStats): void {
    this.heroService.updatedPowerStats$.next(updatedPowerStats);
  }
}
