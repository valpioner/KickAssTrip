// import { Injectable } from "@angular/core";
// import { CanActivate, Router } from "@angular/router";
// import { Observable } from "rxjs";
// import { AuthService } from "../modules/auth/auth.service";
// import { map } from "rxjs/operators";

// @Injectable()
// export class GuestGuard implements CanActivate {
//   constructor(
//     private authService: AuthService,
//     private router: Router
//   ) {}

//   canActivate(): Observable<boolean> | Promise<boolean> | boolean {
//     return this.authService.isLogged.pipe(
//       map(logged => {
//         if (logged) {
//           this.router.navigate(['/protected']);
//           return false;
//         }
//         return true;
//       })
//     );
//   }
// }
