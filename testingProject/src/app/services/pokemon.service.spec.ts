import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { HttpClientModule } from '@angular/common/http';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // debemos poner el done para que finalize el test cuando nosotros queramos
  // si no lo hacemos, termina el test sin tener la info
  it('service should get info of bulbasaur', (done) => {
    service.getPokemon(1).subscribe((pokemon) => {
      console.log(pokemon);
      expect(pokemon.name).toBe('bulbasaur');
      done();
    });
  });
});
