import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { nombrePokemonInput } from 'src/app/shared/searcher/searcher.component';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.css']
})
export class PokemonComponentComponent implements OnInit {

  pokemons:any[] = [];
  validarDatos:string = '';
  sprite =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/`;
  constructor(private pokedexService:PokedexService) {
    
   }

  ngOnInit(): void {
    this.validarDatos = nombrePokemonInput;
    this.searchPokemon(nombrePokemonInput)
  }

  searchPokemon(nombrePokemon:string){
    console.log(nombrePokemon);
    this.pokedexService.datosPokemon(nombrePokemon)
      .subscribe(resp=>{
          this.pokemons.push(resp);
      });
  }

}
