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
var hacker_news_service_1 = require("../../services/hacker-news.service");
require("rxjs/add/operator/switchMap");
var CommentComponent = (function () {
    function CommentComponent(hkservice) {
        this.hkservice = hkservice;
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hkservice.getItemData(this.id).subscribe(function (response) {
            _this.comment = response.json();
            _this.comments = _this.comment.kids;
            // console.log("this.comment",this.comment);
        });
    };
    return CommentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CommentComponent.prototype, "id", void 0);
CommentComponent = __decorate([
    core_2.Component({ selector: 'comment', templateUrl: './comment.component.html', styleUrls: ['./comment.component.css'] }),
    __metadata("design:paramtypes", [hacker_news_service_1.HackerService])
], CommentComponent);
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=comment.component.js.map