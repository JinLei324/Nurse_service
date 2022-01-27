import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyplansPage } from './myplans';

@NgModule({
  declarations: [
    MyplansPage,
  ],
  imports: [
    IonicPageModule.forChild(MyplansPage),
  ],
})
export class MyplansPageModule {}
