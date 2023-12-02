import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharizardComponent } from './charizard.component';
import { PokemonService } from '../../services/pokemon.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled: HTMLElement;
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharizardComponent, HttpClientTestingModule],
      providers: [PokemonService],
    }).compileComponents();

    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do match with snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });

  it('shoulkd show loading at init', () => {
    const h3 = compiled.querySelector('h3');
    expect(h3?.textContent).toContain('Loading...');
  });

  it('should charge Charizard inmediately', () => {
    const dummyPokemon = {
      name: 'charizardo!!!',
      sprites: { front_default: 'https://charizard.com/sprite.png' },
    };
    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    expect(request.request.method).toBe('GET');
    request.flush(dummyPokemon);

    fixture.detectChanges();
    // console.log(compiled.innerHTML);
    const h3 = compiled.querySelector('h3');
    const img = compiled.querySelector('img');

    expect(h3?.textContent?.toLowerCase()).toContain(
      dummyPokemon.name.toLowerCase()
    );
    expect(img?.src).toBe(dummyPokemon.sprites.front_default);
    expect(img?.alt).toBe(dummyPokemon.name);
  });
});
