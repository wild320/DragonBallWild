import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface BattleResultData {
  message: string;
  isVictory: boolean;
  isDraw: boolean;
  playerImage: string;
  enemyImage: string;
}

@Component({
  selector: 'app-battle-result-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './battle-result-modal.component.html',
  styleUrls: ['./battle-result-modal.component.scss'],
})
export class BattleResultModalComponent {
  constructor(
    public dialogRef: MatDialogRef<BattleResultModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BattleResultData,
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
