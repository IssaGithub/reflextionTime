import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StepperComponent } from '@buttermilch/slider';
@Component({
  imports: [NxWelcomeComponent, RouterModule, StepperComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'reflextionTime';
}
