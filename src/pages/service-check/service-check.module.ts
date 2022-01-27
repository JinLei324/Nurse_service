import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceCheckPage } from './service-check';

@NgModule({
  declarations: [
    ServiceCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceCheckPage),
  ],
})
export class ServiceCheckPageModule {}
