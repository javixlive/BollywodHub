import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, of, tap } from "rxjs";
import { TitlesResponse, Movie } from "../../interface/titles.interface";
import { MovieDetails } from "../../interface/details.interface";
import { Cast, Credits } from "../../interface/credits.interface";


// require("dotenv").config();
// const { TOKEN, URL } = process.env
// require('dotenv').config();

// const options = {
//     include_adult: 'false',
//     include_video: 'true',
//     page: '1',
//     headers: {
//         accept: 'application/json',
//         Authorization: token
//     }
// }

//Authorization to make API request
const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWQwMmQ2Y2Y2NjdiOGM1N2Y3MjJkMmMxZTFmZDZhYyIsIm5iZiI6MTcyMDcxNzYwNi4yOTA3MzIsInN1YiI6IjY2OTAwZDBkZDlkN2JjMTc1YTA1NGE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.43J-NEgSgr_z_gjVbrs0JkuSP58c94kFIwmPsLumGqM";
const url = 'https://api.themoviedb.org/3'
const headers = {Authorization:token};

@Injectable({
    providedIn: 'root'
})

export class MovieService {

    private moviePage = 1;
    public loading = false;
        
    // http = inject(HttpClient);

    // getMovies() {
    //     return this.http.get<any>('https://api.themoviedb.org/3/movie/', options)
    // }

    constructor(private http:HttpClient) {}

    //GET request
    getMovie():Observable<Movie[]>{

        if(this.loading) return of([]) //of emits values in a sequence
        this.loading = true

        return this.http.get<TitlesResponse>(`${url}/movie/now_playing?language=es-ES&page=${this.moviePage}`,{headers}).pipe(
        map((response:any)=> response.results),
        tap(() => {
            this.moviePage += 1;
            this.loading = false
        })
        )
    }

    searchMovie(text:string):Observable<Movie[]> {
        return this.http.get<TitlesResponse>(`${url}/search/movie?query=${text}&language=es-ES&page=1`,{headers}).pipe(
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
    ///////////


    resetMoviePage() {
        this.moviePage = 1;
    }

}

