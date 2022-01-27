import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdditionDetailsPage } from './addition-details';

@NgModule({
  declarations: [
    AdditionDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdditionDetailsPage),
  ],
})
export class AdditionDetailsPageModule {}
