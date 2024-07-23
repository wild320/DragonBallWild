import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  slides: any[] = [
    {
      imageUrl: 'https://es.dragon-ball-official.com/dragonball/es/banner/2022/12/MeoQQmsaUgLkFGyb/221212_%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%83%90%E3%83%8A%E3%83%BC_ES.jpg',
      imageAlt: 'Descripción imagen 1',
    },
    {
      imageUrl: 'https://es.dragon-ball-official.com/dragonball/es/banner/2024/07/bewTK7MIa37BpxL1/240719_DAIMA_DBOS_Banner-TOP-EN_1600-840.jpg',
      imageAlt: 'Descripción imagen 2',
    },
    {
      imageUrl: 'https://es.dragon-ball-official.com/dragonball/es/banner/2022/06/158IsRUBuvfvaC3H/%E4%BC%9A%E5%93%A1%E6%A9%9F%E8%83%BD_ES.jpg',
      imageAlt: 'Descripción imagen 3',
    }
  ];

  activeSlideIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => this.next(), 3000);
  }

  prev(): void {
    if (this.activeSlideIndex > 0) {
      this.activeSlideIndex--;
    } else {
      this.activeSlideIndex = this.slides.length - 1;
    }
  }

  next(): void {
    if (this.activeSlideIndex < this.slides.length - 1) {
      this.activeSlideIndex++;
    } else {
      this.activeSlideIndex = 0;
    }
  }

  selectSlide(index: number): void {
    this.activeSlideIndex = index;
  }
}
