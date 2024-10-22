import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from 'src/app/Components/profile/profile.component';
import { MainUserComponent } from '../../Components/main-user/main-user.component';
import { FormUserComponent } from '../../Components/form-user/form-user.component';
import { FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [
    ProfileComponent,
    MainUserComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
