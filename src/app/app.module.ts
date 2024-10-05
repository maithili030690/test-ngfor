import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostCardComponent } from './shared/component/post-card/post-card.component';
import { MovieCardComponent } from './shared/component/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
