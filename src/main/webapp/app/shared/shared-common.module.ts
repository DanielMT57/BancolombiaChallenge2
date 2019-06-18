import { NgModule } from '@angular/core';

import { ApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ApplicationSharedCommonModule {}
