import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UsersComponent } from './component/users/users.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { UserformComponent } from './component/userform/userform.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { Routes,RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import {HttpClientModule} from '@angular/common/http';

const routes:Routes=[
  {path :'',component:UsersComponent},
  {path :'home',component:UsersComponent},
  {path :'users',component:UsersComponent},
  {path :'userdetails/:id',component:UserdetailsComponent},
  {path :'userform/:id',component:UserformComponent},
  {path :'users',component:UsersComponent},
  {path :'addusers/:id',component:UserformComponent},
  {path :'**',component:NotfoundComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    UserdetailsComponent,
    UserformComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),ReactiveFormsModule,HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
