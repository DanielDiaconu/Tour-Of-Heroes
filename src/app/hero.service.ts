import { Injectable } from '@angular/core';
import { BehaviorSubject, merge, Observable, of, tap } from 'rxjs';
import { Hero } from 'src/core/interfaces/hero.interface';
import { PowerStats } from 'src/core/interfaces/powerStats.interface';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroes$ = new BehaviorSubject<Hero[]>([]);
  selectedHero$ = new BehaviorSubject<Hero | null>(null);
  initialPowerStats$ = new BehaviorSubject<PowerStats | null>(null);
  updatedPowerStats$ = new BehaviorSubject<PowerStats | null>(null);
  heroSelection$ = this.selectedHero$
    .asObservable()
    .pipe(
      tap((selectedHero) =>
        this.initialPowerStats$.next(selectedHero?.powerStats as PowerStats)
      )
    );

  getHeroes(): Observable<Hero[]> {
    return this.heroes$.asObservable();
  }

  setHeroes(heroes: Hero[]): void {
    this.heroes$.next(heroes);
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;
    return of(hero);
  }

  constructor() {
    this.setHeroes(HEROES);
    this.heroSelection$.subscribe();
  }
}
