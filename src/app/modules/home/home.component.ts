import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { User } from '@app/_models';
import { UserService } from '@app/_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.loading = true;
    // this.userService
    //   .getAll()
    //   .pipe(first())
    //   .subscribe((users) => {
    //     this.loading = false;
    //     this.users = users;
    //   });
  }
}
