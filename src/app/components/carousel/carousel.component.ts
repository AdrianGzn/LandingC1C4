import { Component } from '@angular/core';
import { ItemCarouselComponent } from '../item-carousel/item-carousel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ItemCarouselComponent, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  images: Array<string> = [
     './assets/hero_1.png',
     './assets/hero_2.png',
     './assets/hero_3.jpg',
     './assets/hero_4.png',
  ];

}
