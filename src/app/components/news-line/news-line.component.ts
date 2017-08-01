import { Input } from '@angular/core';
import {Component, OnInit} from '@angular/core';


@Component({selector: 'news-line', templateUrl: './news-line.component.html', styleUrls: ['./news-line.component.css']})
export class NewsLineComponent implements OnInit {
    @Input() story: any;
    comments : number[];
    showComments: boolean = false;
    constructor() {}

    ngOnInit(){
        this.comments = this.story.kids;
    }

}
