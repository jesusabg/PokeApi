import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resultPokemon, Result } from '../interfaces/Pokedex';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private baseUrl = 'https://pokeapi.co/api/v2/';
 
  constructor( private httpClient: HttpClient) { }

  listaPokemons(limit:number,offset:number){
    return this.httpClient.get<Result>(`${this.baseUrl}pokemon?limit=${limit}&offset=${offset}`)
  }

  datosPokemon(nombrePokemon:string){
    return this.httpClient.get<resultPokemon>(`${this.baseUrl}pokemon/${nombrePokemon}`)
  }

  tiposPokemon(){
    return this.httpClient.get<Result>(`${this.baseUrl}type`)
  }
 
}
