import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [TreeComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [TreeComponent]
})
export class TreeModule { }
