import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WebcamModule} from 'ngx-webcam';
import { FormsModule } from '@angular/forms';
import { OutputImageComponent } from './output-image/output-image.component';
import { DrawService } from './draw.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideInfoComponent } from './side-info/side-info.component';



@NgModule({
  declarations: [
    AppComponent,
    OutputImageComponent,
    TopBarComponent,
    SideInfoComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    FormsModule,
  ],
  providers: [DrawService],
  bootstrap: [AppComponent]
})
export class AppModule { }
