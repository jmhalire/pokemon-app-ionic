import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  infopoke:string;
  allpoke:string
  urlpokemon:string;
  constructor(private http:HttpClient) {
    this.allpoke = 'https://pokeapi.co/api/v2/pokemon?limit=964&offset=0';
    this.infopoke = 'https://pokeapi.co/api/v2/pokemon/';
    this.urlpokemon  =  'https://pokeres.bastionbot.org/images/pokemon/'
   }

  /**
  * getlistpoke
  */
  public getlistpokemon() {
    return this.http.get(this.allpoke)
  }

  /**
   * getinfopoke
   */
  public getinfopokemon(id:number) {
    return this.http.get(`${this.infopoke}${id}`)
  }

  /**
   * getUrlPokemon
   */
  public getUrlPokemon(id:number) {
    return `${this.urlpokemon}${id}.png`;
  }
}
