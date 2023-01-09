import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { FormsModule } from '@angular/forms';
import { FormPageReducer } from './store/reducers/form-page.reducer';
import { StoreModule } from '@ngrx/store';
import { NavButtonAreaComponent } from './components/nav-button-area/nav-button-area.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NavButtonAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      formPages: FormPageReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
