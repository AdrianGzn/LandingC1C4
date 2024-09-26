import { Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardPlantsComponent } from './components/card-plants/card-plants.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'news',
        component: NewsComponent,
    },
    {
        path:'plants',
        component: CardPlantsComponent
    }
];
