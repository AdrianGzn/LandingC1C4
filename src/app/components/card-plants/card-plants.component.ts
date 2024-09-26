import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-plants',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './card-plants.component.html',
  styleUrl: './card-plants.component.css'
})
export class CardPlantsComponent {
  generalPlants: Array<{image: string, name: string, info: string}> = [
    {
      image: './assets/flora/flora_1.png',
      name: 'Durazno',
      info: ''
    },
    {
      image: './assets/flora/flora_2.png',
      name: 'Frijol',
      info: ''
    },
    {
      image: './assets/flora/flora_3.png',
      name: 'Jocote',
      info: ''
    },
    {
      image: './assets/flora/flora_4.png',
      name: 'Limón',
      info: ''
    },
    {
      image: './assets/flora/flora_5.png',
      name: 'Maíz',
      info: ''
    },
    {
      image: './assets/flora/flora_6.png',
      name: 'Mango',
      info: ''
    },
    {
      image: './assets/flora/flora_7.png',
      name: 'Melón',
      info: ''
    },
    {
      image: './assets/flora/flora_8.png',
      name: 'Naranjo',
      info: ''
    },
    {
      image: './assets/flora/flora_9.png',
      name: 'Pepino',
      info: ''
    },
    {
      image: './assets/flora/flora_10.png',
      name: 'Ornamentales',
      info: ''
    },
    {
      image: './assets/flora/flora_11.png',
      name: 'Almendro',
      info: ''
    },
    {
      image: './assets/flora/flora_12.png',
      name: 'Argentina',
      info: ''
    },
    {
      image: './assets/flora/flora_13.png',
      name: 'Bandera',
      info: ''
    },
    {
      image: './assets/flora/flora_14.png',
      name: 'Bellisima',
      info: ''
    },
    {
      image: './assets/flora/flora_15.png',
      name: 'Capitán Lila',
      info: ''
    },
    {
      image: './assets/flora/flora_16.png',
      name: 'Capulín',
      info: ''
    },
    {
      image: './assets/flora/flora_17.png',
      name: 'Dalia',
      info: ''
    },
    {
      image: './assets/flora/flora_18.png',
      name: 'Dombeya',
      info: ''
    },
    {
      image: './assets/flora/flora_19.png',
      name: 'Estropajo',
      info: ''
    },
    {
      image: './assets/flora/flora_20.png',
      name: 'Malacate Blanco',
      info: ''
    },
  ];

  medicinalPlants: Array<{image: string, name: string, info: string}> = [
    {
      image: './assets/flora/medicinal_1.png',
      name: 'Vaporub',
      info: 'Sirve para la tos seca y descongestiona'
    },
    {
      image: './assets/flora/medicinal_2.png',
      name: 'Bugambilia',
      info: 'Ayuda a eliminar la mucosidad.'
    },
    {
      image: './assets/flora/medicinal_3.png',
      name: 'Hoja Santa',
      info: 'Disminuye la fiebre y dolor estomacal'
    },
    {
      image: './assets/flora/medicinal_4.png',
      name: 'Espinosilla',
      info: 'Disminuye la temperatura corporal.'
    },
    {
      image: './assets/flora/medicinal_5.png',
      name: 'Maguey',
      info: 'Se usa para disminuir el dolor de estómago.'
    },
    {
      image: './assets/flora/medicinal_6.png',
      name: 'Hierba Dulce',
      info: 'Es usada como como cicatrizante, para dolores de garganta'
    },
  ];

  toxicPlants: Array<{image: string, name: string, info: string}> = [
    {
      image: './assets/flora/toxica_1.png',
      name: 'Amarylis',
      info: ''
    },
    {
      image: './assets/flora/toxica_2.png',
      name: 'Amoena/Lotería',
      info: ''
    },
    {
      image: './assets/flora/toxica_3.png',
      name: 'Azucena',
      info: ''
    },
    {
      image: './assets/flora/toxica_4.png',
      name: 'Caladio',
      info: ''
    },
    {
      image: './assets/flora/toxica_5.png',
      name: 'Filodendrón',
      info: ''
    },
    {
      image: './assets/flora/toxica_6.png',
      name: 'Hiedra del Diablo',
      info: ''
    },
    {
      image: './assets/flora/toxica_7.png',
      name: 'Hiedra Inglesa',
      info: ''
    },
    {
      image: './assets/flora/toxica_8.png',
      name: 'Acacia Negra',
      info: ''
    },
    {
      image: './assets/flora/toxica_9.png',
      name: 'Acebo',
      info: ''
    },
    {
      image: './assets/flora/toxica_10.png',
      name: 'Adelfa',
      info: ''
    },
    {
      image: './assets/flora/toxica_11.png',
      name: 'Ají',
      info: ''
    },
    {
      image: './assets/flora/toxica_12.png',
      name: 'Árbol de las pulgas',
      info: ''
    },
    {
      image: './assets/flora/toxica_13.png',
      name: 'Azalea',
      info: ''
    },
    {
      image: './assets/flora/toxica_14.png',
      name: 'Belladona',
      info: ''
    },
    {
      image: './assets/flora/toxica_15.png',
      name: 'Bellota de roble',
      info: ''
    },
    {
      image: './assets/flora/toxica_16.png',
      name: 'Boj',
      info: ''
    },
    {
      image: './assets/flora/toxica_17.png',
      name: 'Campanillas Morada',
      info: ''
    },
    {
      image: './assets/flora/toxica_18.png',
      name: 'Cerezo de Jerusalén',
      info: ''
    },
    {
      image: './assets/flora/toxica_19.png',
      name: 'Cicuta',
      info: ''
    },
    {
      image: './assets/flora/toxica_20.png',
      name: 'Corona de Espinas',
      info: ''
    },
  ];
}
