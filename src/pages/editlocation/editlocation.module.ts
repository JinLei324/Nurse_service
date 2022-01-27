import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditlocationPage } from './editlocation';
import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';


@NgModule({
  declarations: [
    EditlocationPage,
  ],
  imports: [
    IonicPageModule.forChild(EditlocationPage),
    GooglePlacesAutocompleteComponentModule
  ],
})
export class EditlocationPageModule {}
