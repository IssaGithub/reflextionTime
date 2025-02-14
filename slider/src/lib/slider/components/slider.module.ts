import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { StepComponent } from './step.component';
@NgModule({
  exports: [StepperComponent, StepComponent],
  imports: [CommonModule, StepperComponent, StepComponent],
  declarations: [],
})
export class SliderModule {}
