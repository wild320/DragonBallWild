import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FilterCardsComponent } from '../shared/filter-cards/filter-cards.component';
import { CharacterSagaBall } from '../core/data/charactersBall.data';
import { CharacterSagaZ } from '../core/data/charactersBallZ.data';
import { SagaBallCharacter } from '../core/models/characterBall.interface';
import { SagaBallZCharacter } from '../core/models/characterBallZ.interface';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatIconModule, FilterCardsComponent],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'] // Corrected from styleUrl to styleUrls
})
export class CharactersComponent implements OnInit {
  characters: SagaBallCharacter[] = [];
  charactersZ: SagaBallZCharacter[] = [];
  filteredCharacters: SagaBallCharacter[] | SagaBallZCharacter[] = []; 
  activeTab: number = 0;
  searchQuery: string = '';

  ngOnInit(): void {
    this.characters = CharacterSagaBall;
    this.charactersZ = CharacterSagaZ;
    this.filteredCharacters = this.characters;
  }

  showDescription(character: SagaBallCharacter) {
    alert(character.description);
  }

  onTabChange(event: any) {
    const index = event.index;
    this.activeTab = index;
  
    let charactersToFilter: SagaBallCharacter[] | SagaBallZCharacter[]  = [];

    switch (index) {
      case 0:
        charactersToFilter = this.characters;
        break;
      case 1:
        charactersToFilter = this.charactersZ;
        break;
      // Handle other tabs as needed
    }
    this.filteredCharacters = this.filterCharacters(charactersToFilter, this.searchQuery);
  }

  onFilterChanged(filter: any) {
    this.searchQuery = filter;
    this.onTabChange({ index: this.activeTab });
  }

  private filterCharacters(characters: SagaBallCharacter[] | SagaBallZCharacter[], query: string): SagaBallCharacter[] | SagaBallZCharacter[] {
    if (!query) {
      return characters;
    }
    const lowerCaseQuery = query.toLowerCase();
    return characters.filter(character => 
      character.name.toLowerCase().includes(lowerCaseQuery) || 
      character.race.toLowerCase().includes(lowerCaseQuery)
    );
  }
}
