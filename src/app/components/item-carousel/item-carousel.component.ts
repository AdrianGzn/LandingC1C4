import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-item-carousel',
  standalone: true,
  imports: [],
  templateUrl: './item-carousel.component.html',
  styleUrl: './item-carousel.component.css'
})
export class ItemCarouselComponent {
  @Input() image= '';
}
