import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [RegisterComponent, LoginComponent]
})
export class AuthModule { }
