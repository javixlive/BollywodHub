import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
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
  loadedMoviesIds = new Set<number>();
  //Allows to work directly with the DOM for infinite scroll
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1500;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    //when position is bigger it will load more titles
    if(pos > max) {
      this.loadMoreMovies();
    }
  }

  constructor(private moviesSvc:MovieService){
    this.moviesSvc.resetMoviePage();
  }

  ngOnInit(): void {
      this.loadMovies();
  }

  loadMovies() {
    this.moviesSvc.getMovie().subscribe(res => {
      this.movies = res;
      this.updateLoadedMovieIds();
    })
  }

  //should it load more movies
  loadMoreMovies() {
    this.moviesSvc.getMovie().subscribe(res => {
      const newMovies = res.filter(movie => !this.loadedMoviesIds.has(movie.id));
      this.movies.push(...newMovies);
      this.updateLoadedMovieIds();
    })
  }

  updateLoadedMovieIds() {
    this.movies.forEach(movie => this.loadedMoviesIds.add(movie.id))
  }

}
