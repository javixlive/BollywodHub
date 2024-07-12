import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../interface/titles.interface';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, MovieCardComponent],
  templateUrl:'home.component.html',
  styles: ``
})


export class HomeComponent implements OnInit {

  movies:Movie[]=[];

  constructor(private moviesSvc:MovieService){}

  ngOnInit(): void {
      this.loadMovies();
  }

  loadMovies() {
    this.moviesSvc.getMovie().subscribe(res => {
      this.movies = res;
    })
  }

}
