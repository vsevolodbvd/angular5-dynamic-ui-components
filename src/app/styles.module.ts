import {NgModule} from '@angular/core';

import settings from '../../settings';

@NgModule({
  declarations: [
    ...settings.uiComponents
  ],
  exports: [
    ...settings.uiComponents
  ]
})
export class StylesModule {}