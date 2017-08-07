import {
	Component,
	OnInit
} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {
	HackerService
} from '../services/hacker-news.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class Login implements OnInit {

	constructor(private hknewsService: HackerService) { }

	ngOnInit(): void {

	}
}