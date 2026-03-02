import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  DragonBallService,
  DragonBallCharacter,
} from '../core/services/dragon-ball.service';
import { BattleResultModalComponent } from './battle-result-modal/battle-result-modal.component';

@Component({
  selector: 'app-batallas',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './batallas.component.html',
  styleUrls: ['./batallas.component.scss'],
})
export class BatallasComponent implements OnInit {
  private dbService = inject(DragonBallService);
  private dialog = inject(MatDialog);
  characters: DragonBallCharacter[] = [];

  playerFighter: DragonBallCharacter | null = null;
  enemyFighter: DragonBallCharacter | null = null;
  battleResult: string = '';

  ngOnInit(): void {
    this.dbService.getCharacters(100).subscribe((res) => {
      this.characters = res.items.filter(
        (c) => this.parseKi(c.maxKi || c.ki) > 0,
      );
    });
  }

  selectFighter(character: DragonBallCharacter) {
    this.playerFighter = character;
    const randomIdx = Math.floor(Math.random() * this.characters.length);
    this.enemyFighter = this.characters[randomIdx];
    this.battle();
  }

  private parseKi(kiString: string): number {
    if (!kiString || kiString === 'unknown') return 0;
    let str = kiString.toLowerCase();
    let multiplier = 1;

    if (str.includes('septillion')) {
      multiplier = 1e24;
      str = str.replace('septillion', '');
    } else if (str.includes('sextillion')) {
      multiplier = 1e21;
      str = str.replace('sextillion', '');
    } else if (str.includes('quintillion')) {
      multiplier = 1e18;
      str = str.replace('quintillion', '');
    } else if (str.includes('quadrillion')) {
      multiplier = 1e15;
      str = str.replace('quadrillion', '');
    } else if (str.includes('trillion')) {
      multiplier = 1e12;
      str = str.replace('trillion', '');
    } else if (str.includes('billion')) {
      multiplier = 1e9;
      str = str.replace('billion', '');
    } else if (str.includes('million')) {
      multiplier = 1e6;
      str = str.replace('million', '');
    }

    let baseNum = 0;
    if (multiplier > 1) {
      baseNum = parseFloat(str.replace(/,/g, ''));
    } else {
      baseNum = parseFloat(str.replace(/\./g, ''));
    }

    return isNaN(baseNum) ? 0 : baseNum * multiplier;
  }

  isFighting = false;

  battle() {
    if (!this.playerFighter || !this.enemyFighter) return;
    this.isFighting = true;
    this.battleResult = '';

    setTimeout(() => {
      const pKi = this.parseKi(
        this.playerFighter?.maxKi !== '0' && this.playerFighter?.maxKi
          ? this.playerFighter.maxKi
          : this.playerFighter?.ki || '0',
      );
      const eKi = this.parseKi(
        this.enemyFighter?.maxKi !== '0' && this.enemyFighter?.maxKi
          ? this.enemyFighter.maxKi
          : this.enemyFighter?.ki || '0',
      );

      let msg = '';
      let isVic = false;
      let isDrw = false;

      if (pKi > eKi) {
        msg = `¡El increíble poder de ${this.playerFighter?.name} pulveriza a ${this.enemyFighter?.name}!`;
        isVic = true;
      } else if (pKi < eKi) {
        msg = `El abrumador Ki de ${this.enemyFighter?.name} ha destruido a ${this.playerFighter?.name}.`;
      } else {
        msg = `Ambos guerreros colapsan por el exceso de energía. Es un empate total.`;
        isDrw = true;
      }

      this.isFighting = false;

      // Open Modal
      const dialogRef = this.dialog.open(BattleResultModalComponent, {
        width: '600px',
        panelClass: 'dragon-ball-modal',
        disableClose: true,
        data: {
          message: msg,
          isVictory: isVic,
          isDraw: isDrw,
          playerImage: this.playerFighter?.image,
          enemyImage: this.enemyFighter?.image,
        },
      });

      dialogRef.afterClosed().subscribe(() => {
        this.reset();
      });
    }, 2500);
  }

  reset() {
    this.playerFighter = null;
    this.enemyFighter = null;
    this.battleResult = '';
    this.isFighting = false;
  }
}
