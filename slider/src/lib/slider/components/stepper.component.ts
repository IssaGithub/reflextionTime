import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step.component';

@Component({
  selector: 'jim-stepper',
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  standalone: true,
  styleUrl: './stepper.component.css',
})
export class StepperComponent {
  @ContentChildren(StepComponent)
  steps!: QueryList<StepComponent>;

  @Input() activeStep = 0;

  ngAfterContentInit() {
    if (this.steps.length) {
      this.steps.toArray()[0].isActive = true;
    }
  }

  goToStep(index: number) {
    if (index >= 0 && index < this.steps.length) {
      this.steps.toArray()[this.activeStep].isActive = false;
      this.activeStep = index;
      this.steps.toArray()[this.activeStep].isActive = true;
    }
  }

  next() {
    this.goToStep(this.activeStep + 1);
  }

  previous() {
    this.goToStep(this.activeStep - 1);
  }

  finish() {
    alert('Wizard finish');
  }
}
