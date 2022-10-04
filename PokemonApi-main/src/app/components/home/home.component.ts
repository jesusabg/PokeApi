import { Component, OnInit } from '@angular/core';
import { resultPokemon, Result } from '../../interfaces/Pokedex';
import { PokedexService } from '../../services/pokedex.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons:any[] = [];
  tiposPokemonArray:any [] =[];
  arr:any [] = [];
  page = 1;
  totalPokemons:number = 0;
  sprite =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/`;
  constructor(private pokedexService:PokedexService) {
    
   }
  
  ngOnInit(): void {
   this.listarPokemons();
   this.tiposPokemon();
   //this.traerPokemonPorTipo();
  }
  
  listarPokemons(){
    this.pokedexService.listaPokemons(20,this.page + 0)
    .subscribe((resp:Result) =>{
      this.totalPokemons = resp.count;
      resp.results.forEach((result:resultPokemon) =>{
        this.pokedexService.datosPokemon(result.name)
          .subscribe((res:any)=>{
            this.pokemons.push(res);
          });
      });
      
    });
  }
  
  //TODO pokemon por tipo
  tiposPokemon(){
    this.pokedexService.tiposPokemon()
    .subscribe((resp:Result)=>{
      this.tiposPokemonArray.push(resp.results)
      console.log(this.tiposPokemonArray);
    })
    this.arr = this.tiposPokemonArray
  }

  traerPokemonPorTipo(){
    this.pokedexService.datosPokemon(this.tiposPokemonArray[0])
    .subscribe((resp:resultPokemon)=>{
      console.log(resp);
      
    })
  }
}
