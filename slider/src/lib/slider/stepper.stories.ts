import { type Meta, StoryObj } from '@storybook/angular';
import { StepperComponent } from './stepper.component';
import { StepComponent } from './step.component';
import { Example1Component } from '../storybook/components/example1.component';
export default {
  title: 'Components/stepper',
  component: StepperComponent,
  imports: [StepperComponent, StepComponent],
} as Meta<StepperComponent>;

export const WizardStepper: StoryObj<StepperComponent> = {
  args: { activeStep: 2 },
  render: args => ({
    props: args,
    component: StepperComponent,
  }),
};

export const WizardStepperExample2: StoryObj<Example1Component> = {
  args: { activeStep: 2 },
  render: args => ({
    props: args,
    component: Example1Component,
  }),
};
