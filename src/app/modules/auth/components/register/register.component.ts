import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  hidePass = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { 
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.form.invalid) {
      this.authService.register(this.form.value);
    }
  }

}
