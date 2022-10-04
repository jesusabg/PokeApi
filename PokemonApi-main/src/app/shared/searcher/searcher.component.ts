import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';
export let responSearch:any;
export let nombrePokemonInput:string = '';
@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  
  constructor(private pokedexService:PokedexService,private router: Router) { }

  ngOnInit(): void {
  }

  // searchPokemon(nombrePokemon:string){
  //   console.log(nombrePokemon);
  //   this.pokedexService.datosPokemon(nombrePokemon)
  //     .subscribe(resp=>{
  //         console.log(resp);
  //         responSearch = resp;
  //     });
  // }

  public getInputValue(inputValue:string){
    nombrePokemonInput = inputValue;
    this.router.navigate(['./pokemon']);
    // console.log(nombrePokemonInput);    
  }





}
