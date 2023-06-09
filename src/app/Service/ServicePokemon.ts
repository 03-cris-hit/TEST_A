import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getPokemon() {
    return this.http.get(`${this.apiUrl}`); // Reemplaza '1' con el ID o nombre del Pokémon que deseas obtener
  }
  getPokemonHability(url: string) {
    return this.http.get(url);
  }
  getPokemonoGetBloque(value1:string,value2:string) {
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit="+value1+"&offset="+value2);
  }
}