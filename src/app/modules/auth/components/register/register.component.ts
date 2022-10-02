import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: UntypedFormGroup;
  hidePass = true;

  constructor(
    private fb: UntypedFormBuilder,
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
