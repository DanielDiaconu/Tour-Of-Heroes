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
  @Input() selectedHero?: Hero;
  @Output() update: EventEmitter<PowerStats> = new EventEmitter();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}

  broadcastChanges(): void {
    // this.update.emit(this.selectedHero?.powerStats);
    // console.log('updated', this.selectedHero?.powerStats);
    this.heroService.updatedPowerStats$.next(
      this.selectedHero?.powerStats as PowerStats
    );
  }
}
