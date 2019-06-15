import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'user/app',
    component: HomePage,
    children:
      [
        {
          path: 'tab1',
          children:
            [
              {
                path: '',
                loadChildren: '../tabs/tab1/tab1.module#Tab1PageModule'
              }
            ]
        },
        {
          path: 'tab2',
          children:
            [
              {
                path: '',
                loadChildren: '../tabs/tab2/tab2.module#Tab2PageModule'
              }
            ]
        },
        {
          path: 'tab3',
          children:
            [
              {
                path: '',
                loadChildren: '../tabs/tab3/tab3.module#Tab3PageModule'
              }
            ]
        },
        {
          path: 'tab4',
          children:
            [
              {
                path: '',
                loadChildren: '../tabs/tab4/tab4.module#Tab4PageModule'
              }
            ]
        },
        {
          path: 'tab5',
          children:
            [
              {
                path: '',
                loadChildren: '../tabs/tab5/tab5.module#Tab5PageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: 'user/app/tab1',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: 'user/app/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}