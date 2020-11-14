import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { WelcomeModule } from './components/welcome/welcome.module'
import { BobcryingModule } from './components/bobcrying/bobcrying.module'
import { NewbobModule } from './components/newbob/newbob.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomeModule,
    BobcryingModule,
    NewbobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
