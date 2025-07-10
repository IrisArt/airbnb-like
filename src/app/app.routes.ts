import { Routes } from "@angular/router";
import { Auth } from "./auth/auth";
import { Main } from "./features/layouts/main/main";
import { Error } from "./features/layouts/error/error";

export const routes: Routes = [
    {
        path: '',
        component: Main
    },
    {
        path: 'login',
        component: Auth
    },
    {
        path: '**',
        component: Error
    }
]