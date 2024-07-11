import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const token = process.env.TOKEN;

const options = {
    include_adult: 'false',
    include_video: 'true',
    page: '1',
    headers: {
        accept: 'application/json',
        Authorization: token
    }
}

@Injectable({
    providedIn: 'root'
})

export class MovieService {
    
    http = inject(HttpClient);

    getMovies() {
        return this.http.get<any>('https://api.themoviedb.org/3/movie/', options)
    }
}