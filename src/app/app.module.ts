import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroPowerStatsComponent } from './hero-power-stats/hero-power-stats.component';
import { CommonModule } from '@angular/common';
import { HeroOverallRatingComponent } from './hero-overall-rating/hero-overall-rating.component';
import { HeroesSortComponentComponent } from './heroes-sort-component/heroes-sort-component.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroPowerStatsComponent,
    HeroOverallRatingComponent,
    HeroesSortComponentComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, FormsModule, CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
