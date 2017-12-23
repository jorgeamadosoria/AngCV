import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {MatButtonModule, MatButtonModule, MatIconModule, MatInputModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CVService } from './cv.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, MatButtonModule, MatIconModule,
    MatCheckboxModule, MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [CVService],
  bootstrap: [AppComponent]
})
export class AppModule { }
