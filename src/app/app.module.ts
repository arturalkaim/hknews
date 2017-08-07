import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { NewsLineComponent } from './components/news-line/news-line.component';
import { HackerService } from './services/hacker-news.service';
import { CommentComponent } from './components/comment/comment.component';
import { Login } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpModule
  ],
  declarations: [
    AppComponent, DashboardComponent, NewsLineComponent, CommentComponent, Login
  ],
  providers: [HackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }