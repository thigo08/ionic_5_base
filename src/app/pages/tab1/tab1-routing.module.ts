import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: 'ta',
    component: Tab1Page,
    children: [
      {
        path: 'one',
        loadChildren: () => import('../second/second.module').then(m => m.SecondPageModule)
      },
      {
        path: 'two',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: '',
        redirectTo: 'ta/one',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'ta/one',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
