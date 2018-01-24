import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserMainComponent } from './user-main/user-main.component';
import { GroupMainComponent } from './group-main/group-main.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginMainComponent } from './login-main/login-main.component';

const appRoutes: Routes = [
  { path: 'users', component: UserMainComponent },
  { path: 'groups', component: GroupMainComponent },
  { path: '', component: LoginMainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserMainComponent,
    GroupMainComponent,
    GroupListComponent,
    GroupFormComponent,
    UserListComponent,
    UserFormComponent,
    LoginMainComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
