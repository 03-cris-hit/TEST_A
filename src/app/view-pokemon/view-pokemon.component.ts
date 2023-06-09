import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokemonService } from 'src/app/Service/ServicePokemon';
@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.css']
})

export class ViewPokemonComponent {
  pokemon: any;
  abilities: any;
  imgPokemon: any;
  datosPokemon:any;
  game_indices:any;
  types:any;
  height:any
  weight:any;
  inputValue1: any;
  inputValue2: any;
  favoritePokemons:any = [];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemon();
    const storedFavorites = localStorage.getItem('favoritePokemons');
    if (storedFavorites) {
      this.favoritePokemons = JSON.parse(storedFavorites);
    }
  }
 

  agregarFav(pokemon: string) {
    if (!this.isFavorite(pokemon)) {
      this.favoritePokemons.push(pokemon);
      localStorage.setItem('favoritePokemons', JSON.stringify(this.favoritePokemons));
    }
  }


  
  eliminarFav(pokemon: string) {
    const index = this.favoritePokemons.indexOf(pokemon);
    if (index !== -1) {
      this.favoritePokemons.splice(index, 1);
      localStorage.setItem('favoritePokemons', JSON.stringify(this.favoritePokemons));
    }
  }
  
  isFavorite(pokemon: string) {
    return this.favoritePokemons.includes(pokemon);
  }

  getPokemon() {
    this.pokemonService.getPokemon().subscribe((data: any) => {
      this.pokemon = data.results;
      console.log(data.results);
      console.log(data);

    });
  }
  getPokemonHability(url: string) {
    this.pokemonService.getPokemonHability(url).subscribe((data: any) => {
      
      this.datosPokemon = data;
      this.abilities = data.abilities;
      this.imgPokemon = data.sprites.back_default;
      this.game_indices = data.game_indices;
      this.types = data.types;
      this.weight = data.weight;
      this.height = data.height;

      console.log(data);
      console.log(data.abilities);
      console.log(data.sprites.back_default);
    });
  }
  getPokemonHability2(url: string) {
    this.pokemonService.getPokemonHability(url).subscribe((data: any) => {
      
      this.datosPokemon = data;
      this.abilities = data.abilities;
      this.imgPokemon = data.sprites.back_default;
      this.game_indices = data.game_indices;
      this.types = data.types;
      this.weight = data.weight;
      this.height = data.height;

      console.log(data);
      console.log(data.abilities);
      console.log(data.sprites.back_default);
    });
  }
  getPokemonoGetBloque() {
    const value1 = this.inputValue1;
    const value2 = this.inputValue2;
    if(value1 != null && value2 != null){

      this.pokemonService.getPokemonoGetBloque(value1,value2).subscribe((data: any) => {
        this.pokemon = data.results;
        console.log(data.results);
      });
    }else{
      alert("agrega un rango")
    }
  }
}
