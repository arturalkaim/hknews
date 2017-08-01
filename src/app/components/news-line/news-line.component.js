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
var core_2 = require("@angular/core");
var NewsLineComponent = (function () {
    function NewsLineComponent() {
        this.showComments = false;
    }
    NewsLineComponent.prototype.ngOnInit = function () {
        this.comments = this.story.kids;
    };
    return NewsLineComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NewsLineComponent.prototype, "story", void 0);
NewsLineComponent = __decorate([
    core_2.Component({ selector: 'news-line', templateUrl: './news-line.component.html', styleUrls: ['./news-line.component.css'] }),
    __metadata("design:paramtypes", [])
], NewsLineComponent);
exports.NewsLineComponent = NewsLineComponent;
//# sourceMappingURL=news-line.component.js.map