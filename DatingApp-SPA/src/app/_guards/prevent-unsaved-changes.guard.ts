import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberCardComponent } from '../members/member-card/member-card.component';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberCardComponent> {
    canDeactivate(component: MemberEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you watn to continue? Any unsaved changes will be lost');
        }
        return true;
    }
}
