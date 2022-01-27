import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatenursingPage } from './ratenursing';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    RatenursingPage,
  ],
  imports: [
    StarRatingModule,
    IonicPageModule.forChild(RatenursingPage),
  ],
})
export class RatenursingPageModule {}
