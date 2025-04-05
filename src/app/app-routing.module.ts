import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {path: 'home', pathMatch: 'full', component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    
    /*---------- Applying lazy loading  ----------*/
    {
      path: 'items', 
      loadChildren: () => import('./pages/items/items-module/items.module').then(m => m.ItemsModule)
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
