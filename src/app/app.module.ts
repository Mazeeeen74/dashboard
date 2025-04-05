import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar/side-bar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ItemsComponent } from './components/items/items.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    NavBarComponent,
    ItemsComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    RouterModule , 
    NgApexchartsModule , 
    NgxDatatableModule

  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
