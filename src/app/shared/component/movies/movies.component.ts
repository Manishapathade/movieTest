import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../module/movie';
import { movieArray } from '../data/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
moviesData : Array<Imovie> = movieArray
  constructor() { }

  ngOnInit(): void {
  }

}
