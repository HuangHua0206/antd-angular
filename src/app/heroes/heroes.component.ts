import { Component, OnInit } from '@angular/core';
import Hero from '../hero'
import { HEROES } from '../moka-heroes'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES
  selectedHero: Hero
  heroes: Hero[];
  constructor(private heroService: HeroService) { 
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
  	this.selectedHero = hero
  	console.log(this.selectedHero)
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
