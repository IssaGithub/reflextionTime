import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'jim-step',
  template: `<ng-content></ng-content>`,
})
export class StepComponent {
  @ContentChild(TemplateRef, { static: true })
  template: TemplateRef<any> | null = null;
  isActive = true;
}
