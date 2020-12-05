import { CarteleraResponse } from '../interfaces/cartelera-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient) { }

    getCartelera(): Observable<CarteleraResponse>{
      return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=3f9fee496e3415281de05bfa42299b7f&language=en-ES&page=1');
    }

}
