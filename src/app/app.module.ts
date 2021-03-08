import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { BoardComponent } from './board/board.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from "@angular/material/icon";
import { ListItemComponent } from './shared/components/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BoardComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
