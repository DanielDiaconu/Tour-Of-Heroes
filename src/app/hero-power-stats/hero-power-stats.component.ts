import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/core/interfaces/hero.interface';

@Component({
  selector: 'app-hero-power-stats',
  templateUrl: './hero-power-stats.component.html',
  styleUrls: ['./hero-power-stats.component.css'],
})
export class HeroPowerStatsComponent implements OnInit {
  @Input() selectedHero?: Hero;
  constructor() {}

  ngOnInit(): void {}
}
