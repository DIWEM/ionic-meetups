import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab5Page } from './tab5.page';

import { HomeResolver } from './tab5.resolver';
import { InfoResolver } from './info.resolver';

const routes: Routes = [
  {
    path: '',
    component: Tab5Page,
    resolve:{
      data: HomeResolver
    }
  },
  {
    path: '',
    component: Tab5Page,
    resolve:{
      dataInfo: InfoResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab5Page],
  providers: [
    HomeResolver,
    InfoResolver
  ]
})
export class Tab5PageModule {}
