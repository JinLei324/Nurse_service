import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NeedscarePage } from './needscare';

@NgModule({
  declarations: [
    NeedscarePage,
  ],
  imports: [
    IonicPageModule.forChild(NeedscarePage),
  ],
})
export class NeedscarePageModule {}
