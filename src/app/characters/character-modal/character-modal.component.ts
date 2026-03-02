import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { DragonBallCharacter } from '../../core/services/dragon-ball.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-character-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.scss'],
})
export class CharacterModalComponent {
  constructor(
    public dialogRef: MatDialogRef<CharacterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DragonBallCharacter,
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
