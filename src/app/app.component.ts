import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // this.matIconRegistry.addSvgIcon(
    //   'flag-en',
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(
    //     'assets/icons/flag-en.svg'
    //   )
    // );
  }
}
