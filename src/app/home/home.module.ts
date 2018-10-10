import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { CreditNumberDirective } from '../shared/directives/credit-number.directive';
import { CreditDateDirective } from '../shared/directives/credit-date.directive';
import { CreditCvvDirective } from '../shared/directives/credit-cvv.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    CreditNumberDirective,
    CreditDateDirective,
    CreditCvvDirective
  ]
})
export class HomePageModule {}
