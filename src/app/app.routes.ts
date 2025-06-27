import { Routes } from "@angular/router";
import { HomeComponent } from "./features/home/home";
import { Auth } from "./auth/auth";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: Auth
    }
]