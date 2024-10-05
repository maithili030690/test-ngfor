import { Component, OnInit } from '@angular/core';
import { Iposts } from './shared/models/posts';
import { postArr } from './shared/consts/posts';
import { Imovie } from './shared/models/movie';
import { movieArray } from './shared/consts/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-ngfor';
  postData !:Array<Iposts>
  movieData! :Array<Imovie>

  ngOnInit(): void {
    this.postData = postArr
    this.movieData=movieArray
  }
}
