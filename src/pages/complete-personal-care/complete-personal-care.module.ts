import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompletePersonalCarePage } from './complete-personal-care';

@NgModule({
  declarations: [
    CompletePersonalCarePage,
  ],
  imports: [
    IonicPageModule.forChild(CompletePersonalCarePage),
  ],
})
export class CompletePersonalCarePageModule {}
