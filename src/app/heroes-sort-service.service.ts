import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HeroesSortType } from 'src/core/enums/heroes-sort-type.enum';

@Injectable({
  providedIn: 'root',
})
export class HeroesSortServiceService {
  sortHeroes$ = new Subject<HeroesSortType>();

  constructor() {}
}
