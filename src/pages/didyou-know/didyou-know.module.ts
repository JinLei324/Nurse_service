import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DidyouKnowPage } from './didyou-know';

@NgModule({
  declarations: [
    DidyouKnowPage,
  ],
  imports: [
    IonicPageModule.forChild(DidyouKnowPage),
  ],
})
export class DidyouKnowPageModule {}
