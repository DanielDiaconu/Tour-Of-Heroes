import { PowerStats } from './powerStats.interface';

export interface Hero {
  id: number;
  name: string;
  powerStats: PowerStats;
  overallRating?: number;
}
