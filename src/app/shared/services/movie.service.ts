import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, of, tap } from "rxjs";
import { TitlesResponse, Movie } from "../../interface/titles.interface";
import { MovieDetails } from "../../interface/details.interface";
import { Cast, Credits } from "../../interface/credits.interface";

import { environment } from "../../environment/environment";

//Authorization to make API request
const token = environment.TOKEN
const url = environment.URL
const headers = {Authorization:token};

@Injectable({
    providedIn: 'root'
})

export class MovieService {

    private moviePage = 1;
    public loading = false;

    constructor(private http:HttpClient) {}

    //GET request
    getMovie():Observable<Movie[]>{

        if(this.loading) return of([]) //of emits values in a sequence
        this.loading = true

        return this.http.get<TitlesResponse>(
            `${url}/movie/now_playing?language=es-ES&page=${this.moviePage}`,{headers}
        ).pipe(
        map((response:any)=> response.results),
        tap(() => {
            this.moviePage += 1;
            this.loading = false
        })
        )
    }

    searchMovie(text:string):Observable<Movie[]> {
        return this.http.get<TitlesResponse>(
            `${url}/search/movie?query=${text}&language=es-ES&page=1`,{headers}
        ).pipe(
            map(res => res.results)
        )
    }

    //This is to find specific info on a certain movie for MovieCardDetails
    movieDetails(id:string) {
        return this.http.get<MovieDetails>(`${url}/movie/${id}?language=es-ES`,{headers}).pipe(
            catchError(err=> of(null))
        )
    }
    movieCredits(id:string):Observable<Cast[] | null> {
        return this.http.get<Credits>(`${url}/movie/${id}/credits?language=es-ES`,{headers}).pipe(

            map(res=>res.cast),
            catchError(err=> of(null))
        )
    }

    resetMoviePage() {
        this.moviePage = 1;
    }

}

