import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GallaryComponent } from './gallary/gallary.component';
import { TodolistComponent } from './todolist/todolist.component';
import { SliderComponent } from './slider/slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistStudentComponent } from './regist-student/regist-student.component';
import { DropdownlistComponent } from './dropdownlist/dropdownlist.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GallaryComponent,
    TodolistComponent,
    SliderComponent,
    NavbarComponent,
    RegistStudentComponent,
    DropdownlistComponent,
    ProductsComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
