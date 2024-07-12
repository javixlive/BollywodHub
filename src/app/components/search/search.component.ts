import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../interface/titles.interface';

@Component({
  selector: 'app-search',
  standalone: true,
  imports:[CommonModule, MovieCardComponent],
  templateUrl: 'search.component.html',
  styles: ``
})
export class SearchComponent {

  text ='';
  movies:Movie[]=[];
  noMovie=''
  constructor(private activatedRoute:ActivatedRoute, private movieSvc:MovieService){}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.text=params['text'];
      this.movieSvc.searchMovie(this.text).subscribe(movies => {
        this.movies = movies;
        if(this.movies.length == 0) {
          this.noMovie="Movie not Found."
        }
      })
    })
  }
}
