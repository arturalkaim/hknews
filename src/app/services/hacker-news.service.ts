import { Http } from '@angular/http';
import {Injectable} from '@angular/core';


const URL_TOP_STORIES : string = "https://hacker-news.firebaseio.com/v0/topstories.json";

@Injectable()
export class HackerService {
    constructor(private http: Http){}

    private getItemURL(id : number) {
        return `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    }
    private getTopStoriesIds() {
        return this.http.get(URL_TOP_STORIES);
    }
    getItemData(id : number) {
        return this.http.get(this.getItemURL(id));
    }

    getTopStories() {
        return this
            .getTopStoriesIds();
    }
}
