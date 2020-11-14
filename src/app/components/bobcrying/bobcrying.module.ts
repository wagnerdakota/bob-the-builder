import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BobcryingComponent } from './bobcrying.component'
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [ BobcryingComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ BobcryingComponent ]
})
export class BobcryingModule { }
