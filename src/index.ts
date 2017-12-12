import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { LoaderService } from './loader.service';

export * from './loader.component';
export * from './loader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
  ],
  exports: [
    LoaderComponent,
  ]
})
export class NeoLoaderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NeoLoaderModule,
      providers: [LoaderService]
    };
  }
}
