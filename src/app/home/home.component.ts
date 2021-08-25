import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { User } from '@app/_models/user';
import { UserService } from '@app/_services/user.service';
import { first } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  opened = true;
  // loading = false;
  // users: User[];

  constructor() {}

  ngOnInit() {
    // this.loading = true;
    // this.userService
    //   .getAll()
    //   .pipe(first())
    //   .subscribe(users => {
    //     this.loading = false;
    //     this.users = users;
    //   });
  }

  ngAfterViewInit() {

    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
}
