import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  selector: 'app-filter-cards',
  templateUrl: './filter-cards.component.html',
  styleUrls: ['./filter-cards.component.scss']
})
export class FilterCardsComponent {
  @Output() filterChanged = new EventEmitter<string>();

  applyFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.filterChanged.emit(input.value.trim().toLowerCase());
    }
  }

  clear(input: HTMLInputElement): void {
    input.value = '';
    this.filterChanged.emit(''); // Emit empty string to clear the filter
  }
}
