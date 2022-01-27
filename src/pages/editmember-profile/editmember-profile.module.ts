import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditmemberProfilePage } from './editmember-profile';

@NgModule({
  declarations: [
    EditmemberProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(EditmemberProfilePage),
  ],
})
export class EditmemberProfilePageModule {}
