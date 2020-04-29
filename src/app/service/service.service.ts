import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { People } from '../Modelos/People/People';
import { Starships } from '../Modelos/Starships/Starships';
import { map } from 'rxjs/operators';
import { Films } from '../Modelos/Films/Films';
import { Planets } from '../Modelos/Planets/Planets';
import { Species } from '../Modelos/Species/Species';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url : string = "https://swapi.co/api";

  constructor(private http : HttpClient) { }

  public listarpeople():Observable<People[]>{
    return (this.http.get<People[]>(this.url+"/people"))
    .pipe(
      map(
        retorno => {return retorno['results']}
      )
    )
  }

  public listarStarships():Observable<Starships[]>{
    return (this.http.get<Starships[]>(this.url+"/starships"))
    .pipe(
      map(
        retorno => {return retorno['results']}
      )
    )
  }

  public listarFilms():Observable<Films[]>{
    return (this.http.get<Films[]>(this.url+"/films"))
    .pipe(
      map(
        retorno =>{return retorno['results']}
      )
    )
  }

  public listarPlanets():Observable<Planets[]>{
    return (this.http.get<Planets[]>(this.url+"/planets"))
    .pipe(
      map(
        retorno =>{return retorno['results']}
      )
    )
  }

  public listarSpecies():Observable<Species[]>{
    return (this.http.get<Species[]>(this.url+"/species"))
    .pipe(
      map(
        retorno =>{return retorno['results']}
      )
    )
  }

}
