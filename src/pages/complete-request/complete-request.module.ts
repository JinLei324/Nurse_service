import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompleteRequestPage } from './complete-request';

@NgModule({
  declarations: [
    CompleteRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(CompleteRequestPage),
  ],
})
export class CompleteRequestPageModule {}
