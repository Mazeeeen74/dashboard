import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from '../../items/items.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  { path : '' , component : ItemsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    NgxDatatableModule,
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class ItemsModule { }
