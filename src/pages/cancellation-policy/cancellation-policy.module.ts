import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancellationPolicyPage } from './cancellation-policy';

@NgModule({
  declarations: [
    CancellationPolicyPage,
  ],
  imports: [
    IonicPageModule.forChild(CancellationPolicyPage),
  ],
})
export class CancellationPolicyPageModule {}
