import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Hero} from '../hero-detail/hero';
import {HeroService} from '../hero-detail/hero.service';
import { HackerService } from '../services/hacker-news.service';

@Component({selector: 'my-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.css']})
export class DashboardComponent implements OnInit {

  heroes : Hero[] = [];
  stories: any[] = [];
  constructor(private heroService : HeroService, private hknewsService: HackerService) {}

	ngOnInit() : void {
		this.heroService
			.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));

		let stories: any[] = [];
		this.hknewsService.getTopStories().switchMap((response) => {
			let ids: any[] = response.json();
			ids.forEach((id:number,index: number) => {
				return this.hknewsService.getItemData(id).subscribe((data)=>{
					let story = data.json();
					story.index = index;
					this.stories[index] = story;
				});
			});
			return stories;
		}).subscribe(
			_ => {}
		);
	}
}
