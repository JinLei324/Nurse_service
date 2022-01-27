import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NursingPersonalPage } from './nursing-personal';

@NgModule({
  declarations: [
    NursingPersonalPage,
  ],
  imports: [
    IonicPageModule.forChild(NursingPersonalPage),
  ],
})
export class NursingPersonalPageModule {}
