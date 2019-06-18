import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: ApplicationSharedModule
    };
  }
}
