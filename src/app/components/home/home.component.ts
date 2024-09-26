import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { InfoHomeComponent } from '../info-home/info-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, InfoHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
