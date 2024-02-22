import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlkatreszekComponent } from './alkatreszek/alkatreszek.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BiciklikComponent } from './biciklik/biciklik.component';
import { LoginComponent } from './login/login.component';
import { KiegeszitokComponent } from './kiegeszitok/kiegeszitok.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { ProductService } from './product.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BiciklikComponent,
    AlkatreszekComponent,
    KiegeszitokComponent,
    RolunkComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [ProductService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
