import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { HackerService } from '../services/hacker-news.service';

@Component({selector: 'my-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.css']})
export class DashboardComponent implements OnInit {

  	stories: any[] = [];
	ids: any[] = [];
	offset: number = -10;
  	constructor(private hknewsService: HackerService) {}

	ngOnInit() : void {
		// this.heroService
		// 	.getHeroes()
		// 	.then(heroes => this.heroes = heroes.slice(1, 5));

		let stories: any[] = [];
		this.hknewsService.getTopStories().subscribe((response) => {
			this.ids = response.json();
				this.loadStories();
			}
		);
	}

	loadStories(){
		this.offset += 10;
		this.ids.slice(this.offset,this.offset+10).forEach((id:number,index: number) => {
			return this.hknewsService.getItemData(id).subscribe((data)=>{
				let story = data.json();
				story.index = index + this.offset;
				console.log(story)
				this.stories[index + this.offset] = story;
			});
		});
	}
}
