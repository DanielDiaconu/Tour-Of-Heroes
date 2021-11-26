import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Hero } from 'src/core/interfaces/hero.interface';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroes$ = new BehaviorSubject<Hero[]>([]);

  getHeroes(): Observable<Hero[]> {
    return this.heroes$.asObservable();
  }

  setHeroes(heroes: Hero[]): void {
    this.heroes$.next(heroes);
  }

  constructor() {
    this.setHeroes(HEROES);
  }
}
