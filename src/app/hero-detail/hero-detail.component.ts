import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/core/interfaces/hero.interface';
import { PowerStats } from 'src/core/interfaces/powerStats.interface';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() {}

  updateHeroPowerStats(updatedPowerStats: PowerStats): void {
    this.hero = {
      ...this.hero,
      powerStats: updatedPowerStats,
    } as Hero;
  }

  ngOnInit(): void {}
}
