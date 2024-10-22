// src/app/Features/profile/profile-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from 'src/app/Components/form-user/form-user.component';
import { ProfileComponent } from 'src/app/Components/profile/profile.component';
import { UserComponent } from 'src/app/Components/user/user.component';

const routes: Routes = [
  { path: '', component: FormUserComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
