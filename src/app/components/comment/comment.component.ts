import { Input } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import { HackerService } from '../../services/hacker-news.service';
import 'rxjs/add/operator/switchMap';

@Component({selector: 'comment', templateUrl: './comment.component.html', styleUrls: ['./comment.component.css']})
export class CommentComponent implements OnInit {
    @Input() id: number;
    comment: any;
    comments: any;
    constructor(private hkservice: HackerService) {}

    ngOnInit(){
        this.hkservice.getItemData(this.id).subscribe(
            (response)=>{
                this.comment = response.json();
                this.comments = this.comment.kids;
                // console.log("this.comment",this.comment);
            }
        )
    }

}
