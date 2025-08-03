import { Routes } from "@angular/router";
import { HomeComponent } from "./features/home/home";
import { Auth } from "./auth/auth";
import { canDeactivateProfile } from "./features/profile/profile.guard";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: Auth
    },
    {
        path: 'profile',
        canDeactivate: [canDeactivateProfile],
        loadComponent: () => import('./features/profile/profile').then(m => m.ProfileComponent)
    }
]