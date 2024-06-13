import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "./movie";

@Injectable({
    providedIn: 'root'
})


export class MovieService {
    url: string = 'https://jsonplaceholder.typicode.com';

    constructor(private httpClient : HttpClient) { }

    getMovies() {
        return this.httpClient .get(`${this.url}/posts`);
    }

    getMovieById(id: number): Observable<Movie> {
        return this.httpClient .get<Movie>(`${this.url}/posts/${id}`);
    }
    
}

