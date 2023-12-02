import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-charizard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './charizard.component.html',
  styleUrl: './charizard.component.scss',
})
export class CharizardComponent {
  public charizard?: Pokemon;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemon(6).subscribe((pokemon) => {
      // console.log(pokemon);
      this.charizard = pokemon;
    });
  }
}
