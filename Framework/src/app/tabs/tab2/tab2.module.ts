import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab2Page } from './tab2.page';

//Para Google Maps
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAsItvwpqZuZQcbDyM6Dy2cu_3Hoo_V1_I' // Api Key para Google Maps
    })
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
