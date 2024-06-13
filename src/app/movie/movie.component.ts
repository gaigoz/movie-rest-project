import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HttpClientModule,HttpClientModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})

export class MovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  
  public movies: Array<any> = [];

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data;
    });
  }

}
