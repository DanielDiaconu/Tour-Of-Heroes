import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/core/interfaces/hero.interface';
import { PowerStats } from 'src/core/interfaces/powerStats.interface';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  updateHeroPowerStats(updatedPowerStats: PowerStats): void {
    this.hero = {
      ...this.hero,
      powerStats: updatedPowerStats,
    } as Hero;
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
    console.log(this.route.snapshot);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getHero();
  }
}
