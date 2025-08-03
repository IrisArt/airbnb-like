import { CanDeactivateFn } from "@angular/router";
import { ProfileComponent } from "./profile";

export const canDeactivateProfile: CanDeactivateFn<ProfileComponent> = (component) => {
    if (component.form.dirty) {
        return confirm('Etes vous sûr de quitter ?')
    }
    return true
}