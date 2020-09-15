import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ],
  exports: [MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:  [ModalComponent]
})
export class AppModule { }
