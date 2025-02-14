import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step.component';
import { StepperComponent } from './stepper.component';

@NgModule({
  declarations: [StepComponent, StepperComponent],
  exports: [StepComponent, StepperComponent],
  imports: [CommonModule],
})
export class SliderModule {}
