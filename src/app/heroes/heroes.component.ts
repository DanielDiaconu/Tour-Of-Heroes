import { Component, OnInit } from '@angular/core';
import { HeroesSortType } from 'src/core/enums/heroes-sort-type.enum';
import { Hero } from 'src/core/interfaces/hero.interface';
import { HeroService } from '../hero.service';
import { HeroesSortServiceService } from '../heroes-sort-service.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private heroSortService: HeroesSortServiceService
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    this.heroSortService.sortHeroes$.subscribe((sort: HeroesSortType) => {
      console.log(sort);
      if (sort === HeroesSortType.ASCENDING) {
        this.heroes.sort((a, b) => a.id - b.id);
      } else if (sort === HeroesSortType.DESCENDING) {
        this.heroes.sort((a, b) => b.id - a.id);
        console.log(this.heroes);
      }
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
