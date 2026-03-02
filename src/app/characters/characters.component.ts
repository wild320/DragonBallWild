import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { FilterCardsComponent } from '../shared/filter-cards/filter-cards.component';
import {
  DragonBallService,
  DragonBallCharacter,
} from '../core/services/dragon-ball.service';
import { CharacterModalComponent } from './character-modal/character-modal.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatIconModule, FilterCardsComponent],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  private dbService = inject(DragonBallService);
  private dialog = inject(MatDialog);

  characters: DragonBallCharacter[] = [];
  filteredCharacters: DragonBallCharacter[] = [];
  searchQuery: string = '';

  currentPage: number = 1;
  isLoading: boolean = false;
  hasMore: boolean = true;
  flippedCards: Set<number> = new Set<number>();

  ngOnInit(): void {
    this.loadMoreCharacters();
  }

  loadMoreCharacters() {
    if (this.isLoading || !this.hasMore) return;
    this.isLoading = true;

    this.dbService.getCharactersPage(this.currentPage, 12).subscribe({
      next: (response) => {
        if (response.items.length === 0) {
          this.hasMore = false;
        } else {
          this.characters = [...this.characters, ...response.items];
          // Refresh filter logic on the new array
          this.onFilterChanged(this.searchQuery);

          if (
            response.meta &&
            response.meta.currentPage >= response.meta.totalPages
          ) {
            this.hasMore = false;
          } else {
            this.currentPage++;
          }
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    // Determine bottom of the page
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      if (!this.isLoading && this.hasMore) {
        this.loadMoreCharacters();
      }
    }
  }

  toggleFlip(id: number, event: Event) {
    // Avoid triggering when clicking buttons inside the card
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() === 'button' || target.closest('button')) {
      return;
    }

    if (this.flippedCards.has(id)) {
      this.flippedCards.delete(id);
    } else {
      this.flippedCards.add(id);
    }
  }

  showDescription(character: DragonBallCharacter, event: Event) {
    event.stopPropagation();
    this.dialog.open(CharacterModalComponent, {
      width: '600px',
      data: character,
      panelClass: 'dragon-ball-modal',
    });
  }

  onFilterChanged(filter: any) {
    this.searchQuery = filter;
    this.filteredCharacters = this.filterCharacters(
      this.characters,
      this.searchQuery,
    );
  }

  private filterCharacters(
    characters: DragonBallCharacter[],
    query: string,
  ): DragonBallCharacter[] {
    if (!query) {
      return characters;
    }
    const lowerCaseQuery = query.toLowerCase();
    return characters.filter(
      (character) =>
        character.name.toLowerCase().includes(lowerCaseQuery) ||
        character.race.toLowerCase().includes(lowerCaseQuery) ||
        character.affiliation.toLowerCase().includes(lowerCaseQuery),
    );
  }
}
