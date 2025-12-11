import {Component,ChangeDetectorRef, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CharactersList} from './components/characters-list/characters-list';
import {Character} from './shared/services/character';
import {CharactersModel} from './shared/models/characters.model';
import {ContinentsList} from './components/continents-list/continents-list';
import {ContinentModel} from './shared/models/continent.model';
import {ContinentService} from './shared/services/continent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharactersList,ContinentsList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private charactersService = inject(Character);
  private continentsService = inject(ContinentService);
  private cdr = inject(ChangeDetectorRef);

  protected charactersToGiveToChild!: CharactersModel[];
  protected continentToGiveToChild!: ContinentModel[];

  protected filteredCharacters!: CharactersModel[];

  protected onSearch(term: string){
  this.filteredCharacters = this.charactersToGiveToChild.filter((character: CharactersModel) =>{
  const fullName = character.fullName ?? '';
  return fullName.toLowerCase().includes(term.toLowerCase())
  })
  }

  ngOnInit() {
  this.getAllContinentsTemplate();
  this.getAllCharactersTemplate();
  }
  private getAllCharactersTemplate() {
    this.charactersService.getCharacter().subscribe((charactersFromApi: CharactersModel[]) => {
      this.charactersToGiveToChild = charactersFromApi;
      this.cdr.detectChanges();
    });
  }

private getAllContinentsTemplate() {
  this.continentsService.getAllContinents().subscribe((continentFromApi: ContinentModel[]) => {
    this.continentToGiveToChild = continentFromApi;
    this.cdr.detectChanges();
  });
}
}



