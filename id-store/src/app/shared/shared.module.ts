import { NgModule } from '@angular/core';
import { ShComponentsModule } from './components/components.module';
import { DefaultImgPipe } from './pipes/default-img.pipe';

@NgModule({
  imports: [ ShComponentsModule ],
  exports: [ ShComponentsModule ],
  declarations: [DefaultImgPipe]
})
export class SharedModule { }
