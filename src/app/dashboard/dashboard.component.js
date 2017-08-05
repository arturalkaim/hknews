"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/switchMap");
var hero_service_1 = require("../hero-detail/hero.service");
var hacker_news_service_1 = require("../services/hacker-news.service");
var DashboardComponent = (function () {
    function DashboardComponent(heroService, hknewsService) {
        this.heroService = heroService;
        this.hknewsService = hknewsService;
        this.heroes = [];
        this.stories = [];
        this.ids = [];
        this.offset = -10;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService
            .getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
        var stories = [];
        this.hknewsService.getTopStories().subscribe(function (response) {
            _this.ids = response.json();
            _this.loadStories();
        });
    };
    DashboardComponent.prototype.loadStories = function () {
        var _this = this;
        this.offset += 10;
        this.ids.slice(this.offset, this.offset + 10).forEach(function (id, index) {
            return _this.hknewsService.getItemData(id).subscribe(function (data) {
                var story = data.json();
                story.index = index + _this.offset;
                console.log(story);
                _this.stories[index + _this.offset] = story;
            });
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({ selector: 'my-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.css'] }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, hacker_news_service_1.HackerService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map