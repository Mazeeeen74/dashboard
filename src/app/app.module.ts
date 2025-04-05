import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar/side-bar.component';
import { HomeComponent } from '../pages/home/home.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { provideHttpClient } from '@angular/common/http';
import { ItemsComponent } from '../pages/items/items/items.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ItemsComponent, 
    SideBarComponent, 
    LoadingScreenComponent
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
