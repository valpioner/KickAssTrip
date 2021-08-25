import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hidePass = true;
  loading = false;
  returnUrl: string;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
    
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit() {

  }

  login() {
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.authService
      .login(this.form.value.email, this.form.value.password)
      .pipe(first())
      .subscribe(
        data => {
          console.log('data: ', data);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log('error: ', error);
          this.error = error;
          // this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
